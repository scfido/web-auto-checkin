#!/bin/sh

# crontab
#-----------------------------------------------------------------------------
#Min     Hour    Day     Month   Weekday Command
#-----------------------------------------------------------------------------
#30        8       *       *       *       /Users/fuyun/GitHub/scfido/web-auto-checkin/check.sh

cd /Users/fuyun
sh .bash_profile

cd /Users/fuyun/GitHub/scfido/web-auto-checkin
/usr/local/bin/node index.js