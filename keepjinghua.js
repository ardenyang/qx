hostname = api.gotokeep.com, kad.gotokeep.com
^https:\/\/kad\.gotokeep\.com\/op-engine-webapp\/v1\/ad url reject-200
^https:\/\/api\.gotokeep\.com\/hyria-webapp\/user\/level\/init url reject-200
^https:\/\/api\.gotokeep\.com\/op-engine-webapp\/v1\/ad\/preload url reject-200
^https:\/\/api\.gotokeep\.com\/anno\/v1\/upgrade\/check url reject-200
^https:\/\/api\.gotokeep\.com\/search\/v6\/default\/keyword\/list url reject-200
^https:\/\/api\.gotokeep\.com\/config\/v3\/basic.+ url echo-response application/json echo-response https://raw.githubusercontent.com/ardenyang/qx/main/keep
