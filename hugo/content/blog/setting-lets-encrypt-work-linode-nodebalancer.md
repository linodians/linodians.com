---
username: FelicianoTech
type: post
title: "Setting up Let’s Encrypt to Work With a Linode NodeBalancer"
date: "2016-07-27"
author: "Ricardo N Feliciano"
categories:
  - "Security"
tags:
  - "ubuntu"
  - "letsencrypt"
linkarticle: ""
---

For some people, the first time setting up Let's Encrypt can be a little daunting. That's okay. It's beta software that doesn't yet have a fully polished process. It's beta software that turned the whole process of obtaining a commercially signed SSL certificate on its head. I was a bit confused at first because I have several websites (including this one) running on a load-balanced setup using a Linode NodeBalancer.

This means that my backends, where my sites live, do not handle HTTPS traffic at all. The SSL certificate for my domain name is actually loaded on the NodeBalancer via Linode Manager and serves as the HTTPS endpoint for all my traffic. So how do I get Let's Encrypt to properly generate an SSL certificate for me and then what do I do with it? Here's how I got everything to work. This same process would also work on custom-made load-balancers. It doesn't have to be a NodeBalancer, I just like the convenience of having one.<!--more-->

To compare your situation to mine, let me quickly explain my setup. I have multiple Linodes serving as backends to a NodeBalancer. My domain names Feliciano.Tech, FelicianoTech.com, Ricardo.Tech, and RicardoFeliciano.me (yes, that many) all point to the NodeBalancer's IP. On the NodeBalancer, I have a configuration for port 443 with the protocol set to HTTPS. Public, encrypted traffic reaches my NodeBalancer, gets terminated there, and then forwarded to one of my backends for actual processing (showing you the page you want). The backends are synced using GlusterFS for the filesystem and MariaDB + Galera for the database. With this setup noted, let's continue.

## How I configured Feliciano.Tech for Let's Encrypt on a NodeBalancer:

1. Log into a backend. If everything is synced as I have it, it doesn't matter which backend you use.

	```
	ssh <USER>@<BACKEND_HOSTNAME>
	```
1. Install Let's Encrypt. These instructions are verbatim from their <a href="http://letsencrypt.readthedocs.org/en/latest/using.html#installation">documentation</a>.

	```
	git clone https://github.com/letsencrypt/letsencrypt
	cd letsencrypt
	```
1. Generate the SSL certificate for each domain you want on the certificate. If you use multiple domains in one command like I did, the first domain given is the main domain, called the 'common name', while the additional domains are designated 'alternate names' (a.k.a. a SAN certificate).

	```
	./letsencrypt-auto certonly --rsa-key-size 4096 --webroot --webroot-path <MY_WEBSITE_DOCUMENT_ROOT> -d feliciano.tech -d felicianotech.com -d ricardo.tech -d ricardofeliciano.me
	```
1. Copy the root and intermediate certificates into the NodeBalancer's 'SSL Certificate' box via Linode Manager. Let's Encrypt will automatically have all of them in one convenient file for you. Since my main domain was feliciano.tech, the file was located here:

	```
	/etc/letsencrypt/live/feliciano.tech/fullchain.pem
	```
	{{< figure src="https://feliciano.tech/wp-content/uploads/2016/01/nb-ssl-cert-box-600x100.png" caption="This box appears when you select the HTTPS protocol on a NodeBalancer configuration." class="align-center" >}}
1. Copy your SSL private key into the NodeBalancer's 'Private Key' box via Linode Manager. Again, Let's Encrypt puts this in a predictable location for you:

	```
	/etc/letsencrypt/live/feliciano.tech/privkey.pem
	```
	{{< figure src="https://i1.wp.com/feliciano.tech/wp-content/uploads/2016/01/nb-private-key-box.png?resize=600%2C100&ssl=1" caption="This box appears when you select the HTTPS protocol on a NodeBalancer configuration." class="align-center" >}}

Once everything has been configured and you can verify that it all works, I would remove your SSL private key from your backends. This file should be kept in a secure location, where only you can read it. A secure flash drive, safety deposit box, encrypted partition, etc. Make sure you actually keep a copy because, for security reasons, you won't be able to recover your private key from the NodeBalancer.

### More Information &amp; Discussion

<a href="https://letsencrypt.org/">Let's Encrypt</a> (<a href="http://letsencrypt.readthedocs.org/en/latest/using.html">documentation</a>) - the homepage and documentation for Let's Encrypt.<br />
<a href="https://www.linode.com/nodebalancers">NodeBalancers</a> (<a href="https://www.linode.com/docs/platform/nodebalancer/">documentation</a>) - the product page and documentation for a Linode NodeBalancer. Their <a href="https://www.linode.com/docs/platform/nodebalancer/nodebalancer-ssl-configuration">SSL sub-article</a> might be of particular interest.

<span class="source">Originally posted on [Feliciano.Tech](https://feliciano.tech/blog/setting-lets-encrypt-work-linode-nodebalancer/).</span>
