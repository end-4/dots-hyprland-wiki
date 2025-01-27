---
title: Install scripts
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
lastUpdated: 2025-01-27
---
# Main method
The related scripts and files around `install.sh` belongs to "main method", which is developed and maintained mainly by clsty.
## Folder Structrue
Main script: `install.sh`
- The script keeps its "data" part under `./scriptdata/`. Some files are also shared by other scripts.
- When the script build something from source, they're stored under `./cache/`. Of course, `./cache` is listed on `.gitignore`.
## Old Dependency Installation Method
The old deps install method mainly involves `./scriptdata/dependencies.conf` (which is empty now). It's not used anymore but I keep the relevant part just in case, e.g. the new install method breaks in future.

There is also a `checkdeps.sh`:
  - It checks the existence of pkgs listed in `./scriptdata/dependencies.conf`.
  - It somehow fixes [the problem caused by yay](https://github.com/end-4/dots-hyprland/discussions/204).

## Current Dependency Installation
Local PKGBUILDs under `./arch-packages/` are used to install dependencies. It enables a workable `uninstall.sh` script.

The PKGBUILDs contains two forms of dependencies:
- Package name written in dependencies, like a "meta" package.
- Normal PKGBUILD content to build dependencies, e.g. AGS, which is often for version controlling.
## Configuration Files Sync
Mainly use rsync.

# Online script
`setup.sh`:
- Stored in the repo of dots-hyprland-wiki to be served by the doc site directly.
- When executed, it downloads the dots-hyprland repo and then executes the `install.sh`.
# Idempotent
The scripts are and should be **idempotent**, i.e. capable for running multiple times.

This is useful for debugging and a resumable installation, and also provide updating function somehow.
