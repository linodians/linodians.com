---
author: Ricardo N Feliciano
categories:
- "Announcements"
date: 2017-06-09
description: "Linode launches preliminary support for CoreOS."
title: "Linode Launches Preliminary CoreOS Support"
type: post
featured: coreos-screenshot.png
featuredalt: ""
featuredpath: /assets/img/posts/
---

With the rise of cloud-computing came many tools that have redefined the way we run applications on the Internet. [Docker][docker] brought Linux containers (LXC) to new heights allowing applications to be tested and deployed quickly and in a reproducible manner. Containers went hand-in-hand with microservices architecture causing tools such as [Kubernetes][k8], created by Google, to be developed to help orchestrate scalable, Docker-based infrastructure. In an increasingly container-based world, new technologies at every level of the stack were created to adapt. At the operating system level, [CoreOS][coreos] was created and now Linode *finally* supports it.

<!--more-->

On June 6th, Linode has enabled CoreOS to be deployed via Linode Manager (and subsequently, their API). It's now listed in their official [Linux Distributions Page][distro-page]. Linode has tested the CoreOS waters before by [offering up instructions][coreos-doc] on how to get CoreOS up and running on one of their VPS. This is the first time it's been available as a pre-installed image, joining the ranks of Debian, Ubuntu, Fedora, Arch, CentOS, OpenSUSE, and Slackware.

If you noticed the article title, we say preliminary support. Linode is just getting started with CoreOS. How well it works with built-in features such as Backups, disk resizing, and Lish we be determined soon. There also isn't any documentation available in their site about CoreOS. I assume there will be in due time. In the meantime, play around with a newly supported distro.



[docker]: https://www.docker.com/
[k8s]: https://kubernetes.io/
[coreos]: https://coreos.com/
[distro-page]: https://www.linode.com/distributions
[coreos-doc]: https://www.linode.com/docs/tools-reference/custom-kernels-distros/install-coreos-on-your-linode
