#!/usr/bin/env bash
# Manual rollback to the newest snapshot left by deploy-vps.sh (run as root on the server).
# Usage from Windows:  Get-Content -Raw scripts\rollback-vps.sh | ssh -i $env:USERPROFILE\.ssh\ashtar_vps root@72.60.34.211 "tr -d '\r\357\273\277' | bash -s"
set -euo pipefail
LIVE=/var/www/dongyingCasting
PREV=$(ls -1dt /var/www/dongyingCasting-prev-* 2>/dev/null | head -1 || true)
[ -n "$PREV" ] || { echo "No rollback snapshot found."; exit 1; }
TS=$(date +%Y%m%d_%H%M%S)
echo "== rolling back to $PREV"
mv "$LIVE" "/var/www/dongying-rolledback-$TS"
mv "$PREV" "$LIVE"
pm2 restart dongying --update-env >/dev/null
for i in $(seq 1 20); do sleep 2; C=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3002/api/health || true); [ "$C" = "200" ] && break; done
echo "health: $C"; [ "$C" = "200" ] || C=$(curl -s -o /dev/null -w '%{http_code}' -H 'Host: dongying-casting.com' http://127.0.0.1:3002/en || true)
pm2 save >/dev/null
echo "ROLLBACK_DONE (status $C). Bad release kept at /var/www/dongying-rolledback-$TS"
