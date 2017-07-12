---
author: Ricardo N Feliciano
categories:
- "Distributions"
date: 2017-07-11T09:00:00-04:00
description: ""
featured: debian-9.png
featuredalt: ""
featuredpath: /assets/img/posts/
linkarticle: ""
tags:
- ""
title: "What's New in Debian 9 for Linode Users"
type: post
username: FelicianoTech
---

After 2 years in development, Debian 9 "Stretch" was released a few weeks ago. Linode offered the new distro version shortly after. We'll briefly share some of the changes in Debian 9 for server, changes most likely to affect Linode users.<!--more-->

{{< tweet 876877280215224326 >}}

## Highlights

> **Debian 9 has been dedicated in honor of the late Ian Murdock, the founder of Debian.**

**[MariaDB](https://mariadb.org/)** - MariaDB has replaced MySQL in Debian. With Oracle's tentacles around MySQL, there's been a lot of doubt about the open-source future of MySQL. MariaDB was forked by MySQL's founder to keep the future of the software safe. This is a big win for MariaDB and the open-source community. Starting with MariaDB v10, there's also a lot of new features that is helping MariaDB differentiate and stay modern.

If you're upgrading from Debian 8, the MySQL packages will seamlessly changeover to the equivalent MariaDB packages.

**FTP Support Dropped for Debian Mirrors** - Access to the Debian Mirrors via FTP has been dropped and it's about damn time. This means, instead of using `ftp://deb.debian.org`, you should be using `http://deb.debian.org`. No changes needed on a fresh install:

```
deb http://deb.debian.org/debian          stretch         main
deb http://deb.debian.org/debian-security stretch/updates main
```

*Note: Many distros pre-installed by Linode use Linode's own package mirrors. Thus, this change doesn't affect you if you use the pre-installed image.*

**Linux v4.9** - Debian 9 ships with Linux kernel v4.9, which is an LTS release. 4.9 includes a lot of changes and has been dubbed the ["largest kernel release ever"](https://www.linux.com/news/linux-kernel-49-here-and-its-largest-release-ever). While these changes are interesting, by default, when you run a Linode pre-installed distro, you are not using a distro supplied kernel but rather a kernel provided by Linode. Your VPS will use whichever kernel is selected in the kernel dropdown in "Configuration Profile". As of this writing, Linode's most recent kernel available is Linux v4.9.36.

If you decide you rather use a distro supplied kernel, which is what I do, Linode provides [a guide for that](https://www.linode.com/docs/tools-reference/custom-kernels-distros/run-a-distribution-supplied-kernel-with-kvm).

**iproute2 replaces net-tools** - `net-tools` is the package that provides classic SysAdmin commands such as `arp`, `ifconfig`, and `netstat`. For awhile now, these commands have been replaced with modern alternatives. Debian finally drops `net-tools` in favor of `iproute2`. Here are alternatives to the old commands:

| `net-tool` Commands       | `iproute2` Replacement             |
| ------------------------- | ---------------------------------- |
| `ifconfig`                | `ip a` or `ip link` or `ip s`      |
| ` route`                  | `ip r`                             |
| `netstat`                 | `ss`                               |
| `arp`                     | `ip n`                             |

**Upstart Removed** - Debian 8 made headlines by favoring SystemD over Upstart. With Debian 9, Upstart has now been removed completely.

## Other Changes

### Notable Package Updates

- Apache v2.4.25
- Golang v1.7
- Linux v4.9
- MariaDB v10.1
- Nginx v1.10
- OpenSSH v7.4p1
- PHP v7.0
- PostgreSQL v9.6
- Python v2.7.13 and v3.5.3
- Ruby v2.3
