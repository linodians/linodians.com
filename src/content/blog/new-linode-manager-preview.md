---
title: "New Linode Manager Preview"
description: ""
date: 2017-08-14T09:00:00-04:00
author: "Ricardo N Feliciano"
username: FelicianoTech
type: post
---

In May 2016 Linode announced that they started working on [a new Linode Manager](https://engineering.linode.com/2016/05/16/Announcing-the-new-open-source-manager.html). About 14 months later, they have opened up the new manager as a public beta at [cloud.linode.com](https://cloud.linode.com). Here's a few thoughts and screenshots.

<!-- more -->

*note: The following review is based off of Linode Manager v0.12.7 which Linode considers "early-access". It is not complete and can change by the time they are ready to release it.*

This review isn't an in-depth one as there's no point, the new Linode Manager is still changing. This is simply brief commentary and what exists right now, with screenshots (at the end) for people who don't feel like checking it out themself or don't have Linode accounts.

> **My initial reaction? Underwhelming**

I took the new Linode Manager for a spin yesterday and was quite surprised. My initial reaction? Underwhelming. Design-wise, the layout makes sense but the whole thing lacks color. It's a very plain experience with absolutely no personality.

## What's the Same?

Almost everything. Page for page, you can click through the new Linode Manager and see everything laid out mostly the same as the equivalent page in the old manager. Just with the new, white on white with thin grey lines theme.

## What's Missing?

What sucks is that of the few things different, they're different in a lacking way. Viewing a Linode for example, only shows you one graph. You have to dig deeper to see more. The Dashboard (the page you see when you log in) no longer shows what plan your Linode is on.

How does the Longview page look? Who knows, it's missing. This worries me because the Longview part of the original Linode Manager was the best designed component. I've noted earlier that the new Linode Manager is still very much in development. So maybe there's no need to worry, however Linode Images and Volumes also aren't complete, but at least they have stub pages that say "Support is coming soon". Longview doesn't even have that.

## What's New?

List management. Pages that naturally list items, such as the list of Linodes on the Dashboard page, now allow you to take action on more than one item at a time. For example, on the main Dashboard, you can select multiple Linodes by using checkboxes, and then do the same action to all of them. Currently, the options are to mass delete, reboot, or power off Linodes. Another common "list feature" that you'll see is a filter text box. This allows you to quickly narrow down the list of Linodes. This is convenient as I can type "db" and I'll only see my database Linodes, regardless of Group or datacenter (DC).

Another feature updated is the StackScript create/edit page. The input area for adding StackScripts now prefills the hashbang for you at the top, includes line numbers, and highlights the current line.

When creating a new image, the "Root Password" field now includes a password strength meter. This is a nice touch. I only wish they included a "Confirm Password" field as well. You get to type the root password once and you can't see the characters you type (as it should be) which means, if you fat-finger it, you're screwed.

## The Silver Lining

I've been very critical in this review. I believe that great software should be well thought out in both user experience (UX) as well as design. I don't think the new Linode Manager is there. [This isn't the only critical review of the new Manager](https://forum.linode.com/viewtopic.php?f=7&t=15001&sid=229d5eb9e4d97494ab671df1ce7ef5d9) either.

There's a silver lining though. The new Linode Manager represents a major change in how Linode has approached software development. It's built with a modern JavaScript framework and is entirely open-source [on GitHub](https://github.com/linode/manager). I applaud the choice to develop this out in the open and I look forward to what it will become.

There's another significance here. Back in June, we wrote [Linode's Long-Awaited API Rewrite Enters Beta](https://linodians.com/blog/linodes-long-awaited-api-rewrite-enters-beta/). It's a rewrite of their API to make it RESTful and support newer Linode features. The new Linode Manager is a front and center example to developers on how to implement clients for Linode's new API.

So there's that.

## Screenshots

### Dashboard

{{< figure src="/assets/img/posts/new-manager-main-dashboard.png" alt="New Linode Manager Dashboard" >}}

### Add Linode Page

{{< figure src="/assets/img/posts/new-manager-add-linode.png" alt="New Add Linode Page" >}}

### View Linode Page

{{< figure src="/assets/img/posts/new-manager-linode.png" alt="New Linode View Page" >}}

### Linode Images

{{< figure src="/assets/img/posts/new-manager-linode-images.png" alt="New Linode Images Page" >}}

### NodeBalancers

{{< figure src="/assets/img/posts/new-manager-nodebalancers.png" alt="New NodeBalancers Page" >}}

### Domains

{{< figure src="/assets/img/posts/new-manager-domains.png" alt="New Linode Domains Page" >}}

### Notifications

{{< figure src="/assets/img/posts/new-manager-notifications.png" alt="New Notifications Feature" >}}

### User Menu

{{< figure src="/assets/img/posts/new-manager-menu-dropdown.png" alt="New User Menu Dropdown" >}}
