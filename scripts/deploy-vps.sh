#!/usr/bin/env bash
# Zero-downtime deploy on the Hostinger VPS (run as root on the server):
#   build a fresh clone next to the live dir, swap on success, auto-rollback on failure.
# Usage from Windows:  Get-Content -Raw scripts\deploy-vps.sh | ssh -i $env:USERPROFILE\.ssh\ashtar_vps root@72.60.34.211 "tr -d '\r\357\273\277' | bash -s"
set -euo pipefail
TS=$(date +%Y%m%d_%H%M%S)
LIVE=/var/www/dongyingCasting
NEW=/var/www/dongying-release-$TS
PREV=/var/www/dongyingCasting-prev-$TS
PORT=3002
KEEP_PREV=3   # rollback snapshots to keep

echo "== clone"; git clone -q --depth 1 https://github.com/georgesmalki58-sudo/dongyingCasting.git "$NEW"
cd "$NEW"; SHA=$(git rev-parse --short HEAD); git log --oneline -1

# 01/02 env + secrets: reuse the live .env.local (never in git), owner-only perms.
cp -p "$LIVE/.env.local" "$NEW/.env.local"; chmod 600 "$NEW/.env.local"
for k in NEXT_PUBLIC_SITE_URL SMTP_HOST SMTP_USER SMTP_PASS; do
  grep -qE "^$k=.+" .env.local || { echo "ENV CHECK FAILED: $k missing in .env.local - live site untouched"; rm -rf "$NEW"; exit 1; }
done
grep -qE '^GIT_SHA=' .env.local && sed -i "s/^GIT_SHA=.*/GIT_SHA=$SHA/" .env.local || echo "GIT_SHA=$SHA" >> .env.local

echo "== npm ci"; npm ci --no-audit --no-fund --loglevel=error 2>&1 | tail -3
echo "== audit (prod deps)"; npm audit --omit=dev --audit-level=critical >/dev/null 2>&1 || { echo "AUDIT FAILED: critical vulnerability - live site untouched"; rm -rf "$NEW"; exit 1; }
# 03 debug mode: production build only.
echo "== build"; NODE_ENV=production npm run build 2>&1 | grep -E "Compiled|Failed|rror|First Load JS shared" | head -8
test -f .next/BUILD_ID || { echo "BUILD FAILED - live site untouched"; exit 1; }

echo "== swap"; mv "$LIVE" "$PREV"; mv "$NEW" "$LIVE"
pm2 restart dongying --update-env >/dev/null

# 09 monitoring: wait for /api/health (env valid) + a real page.
HEALTH=000; PAGE=000
for i in $(seq 1 20); do
  sleep 2
  HEALTH=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:$PORT/api/health || true)
  [ "$HEALTH" = "200" ] && break
done
PAGE=$(curl -s -o /dev/null -w '%{http_code}' -H 'Host: dongying-casting.com' http://127.0.0.1:$PORT/en/products || true)
echo "local check: health $HEALTH, /en/products $PAGE"

# 10 rollback.
if [ "$HEALTH" != "200" ] || [ "$PAGE" != "200" ]; then
  echo "== ROLLBACK"; mv "$LIVE" "$NEW.failed"; mv "$PREV" "$LIVE"; pm2 restart dongying --update-env >/dev/null; exit 1
fi
pm2 save >/dev/null

# Prune old rollback snapshots and failed builds (keep the newest $KEEP_PREV).
ls -1dt /var/www/dongyingCasting-prev-* 2>/dev/null | tail -n +$((KEEP_PREV+1)) | xargs -r rm -rf
ls -1dt /var/www/dongying-release-*.failed 2>/dev/null | tail -n +2 | xargs -r rm -rf

echo "DEPLOY_OK $TS $SHA  (rollback: scripts/rollback-vps.sh -> $PREV)"
