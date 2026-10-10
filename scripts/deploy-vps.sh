#!/usr/bin/env bash
# Zero-downtime deploy on the Hostinger VPS (run as root on the server):
#   build a fresh clone next to the live dir, swap on success, auto-rollback on failure.
# Usage from Windows:  Get-Content -Raw scripts\deploy-vps.sh | ssh -i $env:USERPROFILE\.ssh\ashtar_vps root@72.60.34.211 "tr -d '\r\357\273\277' | bash -s"
set -euo pipefail
TS=$(date +%Y%m%d_%H%M%S)
LIVE=/var/www/dongyingCasting
NEW=/var/www/dongying-release-$TS
PREV=/var/www/dongyingCasting-prev-$TS
echo "== clone"; git clone -q --depth 1 https://github.com/georgesmalki58-sudo/dongyingCasting.git "$NEW"
cd "$NEW"; git log --oneline -1
cp -p "$LIVE/.env.local" "$NEW/.env.local"; chmod 600 "$NEW/.env.local"
echo "== npm ci"; npm ci --no-audit --no-fund --loglevel=error 2>&1 | tail -3
echo "== build"; npm run build 2>&1 | grep -E "Compiled|Failed|rror|First Load JS shared" | head -8
test -f .next/BUILD_ID || { echo "BUILD FAILED - live site untouched"; exit 1; }
echo "== swap"; mv "$LIVE" "$PREV"; mv "$NEW" "$LIVE"
pm2 restart dongying --update-env >/dev/null; sleep 6
CODE=$(curl -s -o /dev/null -w '%{http_code}' -H 'Host: dongying-casting.com' http://127.0.0.1:3002/en/products)
HAS=$(curl -s -H 'Host: dongying-casting.com' http://127.0.0.1:3002/en/products | grep -c high-temp-alloy || true)
echo "local check: HTTP $CODE, new section: $HAS"
if [ "$CODE" != "200" ] || [ "$HAS" = "0" ]; then
  echo "== ROLLBACK"; mv "$LIVE" "$NEW.failed"; mv "$PREV" "$LIVE"; pm2 restart dongying >/dev/null; exit 1
fi
pm2 save >/dev/null
echo "DEPLOY_OK $TS  (rollback dir: $PREV)"
