---
author: Ricardo N Feliciano
username: FelicianoTech
categories:
- "Linode DNS"
date: 2016-08-12
description: ""
featured: gapps.png
featuredalt: ""
featuredpath: /assets/img/posts/
linkarticle: ""
tags:
- "google"
- "google-apps"
- "linode-cli"
title: "Setup Google Apps Email on Linode"
type: post
---

Many people who run their own website on Linode end up wanting a professional 
looking email address. Something like jane@mywebsite.com. This can be done by 
signing up for [Google Apps][gapps-link] and then configuring your domain on 
Linode

## Setting the MX Records up Manually
The MX records needed to get Google Apps email working for your domain can be 
configured manually from [Linode Manager][dns-manager-link]. Fortunately, 
Linode [has a guide to walk us through this process][linode-gapps-guide]. 
However, if you have the [Linode CLI][linode-cli] installed we can get them 
installed with a single line.

## Setting the MX Records via the Linode CLI
With the Linode CLI already installed locally on your machine, you can 
configure your domain name for Google Apps by copying & pasting the following 
line into your terminal:


```
curl -s https://raw.githubusercontent.com/linodians/linode-cli-scripts/master/gapps.sh | bash -s <EXAMPLE.COM>
```

Make sure to replace `<EXAMPLE.COM>` with the actual domain you are configuring. 
**Warning:** This script will delete any existing MX records for that domain.

You can view the script on GitHub [here][script-link]. A good rule of thumb is 
to always investigate a script before you blindly run it on your computer. 
Security!



[gapps-link]: https://apps.google.com/
[dns-manager-link]: https://manager.linode.com/dns
[linode-gapps-guide]: https://www.linode.com/docs/email/using-google-apps-for-email
[linode-cli]: https://www.linode.com/docs/platform/linode-cli
[script-link]: https://github.com/linodians/linode-cli-scripts/blob/master/gapps.sh
