---
username: FelicianoTech
type: post
title: "Running Ubuntu Snappy Core on Linode"
description: "How to test Ubuntu Snappy Core on Linode."
date: "2016-07-19"
author: "Ricardo N Feliciano"
categories:
  - "Experimental Projects"
tags:
  - "ubuntu"
  - "ubuntu-core"
  - "ubuntu-snappy-snappy"
featured: "linode-ubuntu-snappy-core.png"
featuredalt: ""
featuredpath: "/assets/img/posts/"
linkarticle: ""
---

When I first heard of Ubuntu Snappy Core I was immediately intrigued. Dual file 
systems, new package manager, the ability to roll-back updates, what in the 
world was Canonical up to? I had to find it out for myself.

With VirtualBox in tow, I went to Ubuntu's website so I can download and 
install the ISO. No luck. Ubuntu Core was being distributed different from 
traditional Ubuntu. Tarballs for Internet-of-Things (IoT) devices and "cloud 
images" for everything else. I decided to try to get it running on Linode and 
it was simply a bit... of a pain, to get working. This was many months ago. 
Fast forward to today and Linode now has KVM, Ubuntu Core has KVM images... you 
get where I’m going with this. Below are instructions for how to get Ubuntu 
Snappy Core running on a Linode.

1. Have a Linode with at least 3,720MB of allocated disk space available. This 
Linode needs to be one of the new KVM Linodes. If you have a Xen Linode, you 
can convert it using the link on the bottom right of your Linode's Dashboard 
page.
1. We're going to create a new raw disk. To do this, click the `Create a new 
disk` link in the Dashboard.
  1. For the `Label`, I used "Ubuntu Snappy Core" however you can name it 
  whatever you want.
  1. For `Type`, select `unformatted / raw` from the drop down.
  1. For `Size`, type "3720".
  1. Click the `Save Changes` button.
1. From the `Rescue` tab on the Dashboard, boot into Rescue Mode.
1. Connect to your Linode via Lish or SSH. For this step I prefer Lish.
1. Download the Ubuntu Snappy Core image to your Linode (takes less than 4 
seconds). You can run the first command for the stable release or the second 
command for the edge release:
  - `wget http://releases.ubuntu.com/15.04/ubuntu-15.04-snappy-amd64-generic.img.xz`
  - `wget http://cdimage.ubuntu.com/ubuntu-snappy/15.04/edge/ubuntu-15.04-snappy-amd64-generic.img.xz`
1. Decompress the image (took about a minute).
  - `unxz ubuntu-15.04-snappy-amd64-generic.img.xz`
1. Copy the downloaded image to our raw disk (took about 4 seconds):
  - `dd if=ubuntu-15.04-snappy-amd64-generic.img of=/dev/sda bs=1M`
1. Create a `Configuration Profile`  (config profile) from the Linode's 
Dashboard by clicking on the `Create a new Configuration Profile` link.
  - ‘Label’ it whatever you want. Mine was “Ubuntu Snappy Core Test”.
  - Change kernel to `Direct Disk`.
  - For `/dev/sda` in `Block Device Assignment`, make sure that the raw disk you created earlier is selected.
  - Turn all of the ‘Filesystem/Boot Helpers’ off (by selecting ‘No’).
  - Save Changes
1. Making sure that your new config profile is selected, click the `Reboot` 
button to boot into your new system.
1. If you left Lish open earlier, you can see the new system booting. If not, 
you can now log into your Ubuntu Snappy Core machine via Lish or SSH. The 
username is going to be `ubuntu` and the password will also be `ubuntu`.

Notes:
  - IPv4 and IPv6 networking should be already working
  - I would change the password and create a new user before doing anything else.

Helpful/Interesting related links:

  - [Robot spider powered by Ubuntu Snappy Core](http://insights.ubuntu.com/2015/08/05/the-first-app-enabled-spider)
  - [Ubuntu Snappy Core's main developer page](https://developer.ubuntu.com/en/snappy)
  - [Some tutorials](https://developer.ubuntu.com/en/snappy/tutorials/using-snappy)

<span class="source">Originally posted on [Feliciano.Tech](https://feliciano.tech/blog/running-ubuntu-snappy-core-on-linode/).</span>
