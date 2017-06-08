---
author: Ricardo N Feliciano
categories:
- "Miscellaneous"
date: 2017-06-08
description: "Linode announces that version 4 of their API is now in beta."
title: "Linode's Long-Awaited API Rewrite Enters Beta"
type: post
featured: apiv4-beta.png
featuredalt: ""
featuredpath: /assets/img/posts/
---

[Linode's API][api] has grown long in the tooth. It's not the most efficient to use but more importantly, lacks endpoints for many Linode features that have launched in the past several years. Linode has heard our complaining and [launched an effort to create a new API][alpha-post] back in April of 2016. Over a year later, they have finally promoted the new API to beta status. The feature list is inspiring, enabling a suite of better and new tools to be built for Linode in the future.

<!--more-->

## Feature Highlights

- OAuth authentication
- slugs instead of Linode labels and IDs which can change
- IPv6 support
- Linode Backup support
- NodeBalancer support
- Support ticket support

Those last 3 features are **a big deal**. With Linode API v4, we'll now be able to manager NodeBalancers, Backups, and support tickets via the API.

## Sign Up for the Beta

You can sign up now to try out the Linode API v4 beta by opening a [Support Ticket][support]. Hopefully Linode doesn't go the route of Gmail and keep this in beta for years. Linode Images ([announced in 2014][images]) is still in beta right now.

## More Information

- **Linode API v4 Docs** - <https://developers.linode.com/v4/>
- **Linode Engineering Blog** - <https://engineering.linode.com/>
- **Source** - <https://forum.linode.com/viewtopic.php?t=14885&p=73694>



[api]: https://www.linode.com/api
[alpha-post]: https://engineering.linode.com/2016/04/12/Announcing-APIv4.html
[support]: https://manager.linode.com/support/ticket/new?summary=API%20Beta
[images]: https://forum.linode.com/viewtopic.php?t=11180
