---
author: Ricardo N Feliciano
categories:
- "Announcements"
date: 2017-06-14T12:04:04-04:00
description: "Linode quietly launches a private beta for block storage."
featured: block-storage-private-beta.png
featuredalt: ""
featuredpath: /assets/img/posts/
linkarticle: ""
tags:
- "block-storage"
- "beta"
title: "Linode Block Storage Private Beta Is Here"
type: post
username: FelicianoTech
---

Linode is on fire! Just last week we reported on [APIv4 going beta][api-beta] and support for a [new pre-installed distro image][coreos-post]. This morning, they have announced a private beta for Linode Block Storage.

<!--more-->

On Valentine's Day 2017, Linode [made a huge splash][vday-post] in the web hosting space. Not only did they launch $5 Linodes (my wallet thanks you), but they launched "High-Memory Instances". These are a new breed of Linodes which offer a higher amount of RAM for your money then regular Linodes. Helpful for database servers for example. This is significant because this is the first time Linode has offered something outside of their basic plan Linodes. As they hinted in that blog post, they're continuing down that path with block storage.

## Feature Highlights

What can/can't Linode Block Storage do?

- allows you to create, resize, and destroy storage "volumes"
- attach and detach a volume from a Linode (unfortunately, only one Linode per volume)
- up to 8 volumes per Linode
- volume sizes range from 1Gb to 100GB (which means up to 800GB in block storage per Linode)
- NVMe SSD drives are being used with 3x replication (available within data center (DC) only)

## What is Block Storage?

Linodes come in certain price points that give you a specific amount of resources. For example, a $5 Linode has 1GB of RAM, 1CPU core, and 20GB of SSD storage. Let's say your site grows and you need more resources. You upgrade to a $20 Linode with 4GB of RAM, 2 CPU cores, and 48GB of SSD storage. Perfect, except, users are uploading so many files to your website that you need more storage. 48GB is no longer enough, you need 100GB of storage. The only way to do this on Linode right now is to upgrade to the $80 Linode. Now you're paying quadruple the price. You got huge Linode with tons of RAM, but you only needed the storage. How can we fix this and be efficient with our money? This is where block storage comes in.

The basic idea of block storage is that you don't need to upgrade your entire server just to get more storage. Instead, you can purchase additional "blocks" of storage, which Linode will be calling volumes, that you can then attach to your Linode.


## Sign Up for the Beta

You can sign up now to try out the Linode Block Storage Private Beta **for free** by opening a [Support Ticket][support]. This is a free private beta, which is extremely generous. Have some fun with it.

## More Information

This post simply covers Linode's announcement. Stay tuned to Linodians either [on Twitter][twitter] or [join our Slack Team][slack] to see when we publish a follow-up with a proper review of Linode's new block storage.

- **Source** - <https://forum.linode.com/viewtopic.php?f=26&t=14906>



[api-beta]: https://linodians.com/blog/linodes-long-awaited-api-rewrite-enters-beta/
[coreos-post]: https://linodians.com/blog/linode-launches-preliminary-coreos-support/
[vday-post]: https://blog.linode.com/2017/02/14/high-memory-instances-and-5-linodes/
[source]: https://forum.linode.com/viewtopic.php?f=26&t=14906
[support]: https://manager.linode.com/support/ticket/new?summary=API%20Beta
[twitter]: https://twitter.com/Linodians
[slack]: https://slack.linodians.com/
