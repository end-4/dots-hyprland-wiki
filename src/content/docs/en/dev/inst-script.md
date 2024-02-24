---
title: Installer scripts
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
lastUpdated: 2024-02-24
---
Currently the scripts only work for Arch(-based) distros.

# Structrue
Main script: `install.sh`
- The script keeps its "data" part under `./scriptdata/`. Some files are also shared by other scripts.
- When the script build something from source, they're stored under `./cache/`. Of course, `./cache` is listed on `.gitignore`.

Other scripts:
- `update-ags.sh`
  - The script uses the `install-ags` function from `./scriptdata/installers`.
  - If executed, it installs AGS without confirm.
- `checkdeps.sh`
  - Check the existence of pkgs listed in `./scriptdata/dependencies.conf`.
  - It somehow fixes [the problem caused by yay](https://github.com/end-4/dots-hyprland/discussions/204).
- `uninstall.sh`
  - Deprecated. Unrecommended to use because it's behavior may be destructive.
  - If executed, it tries to revert all changes from `install.sh`, whether the change is or is not really caused by `install.sh`.

Online script: `setup.sh`
- Stored in the repo of dots-hyprland-wiki to be served by the doc site directly.
- When executed, it downloads the dots-hyprland repo and then executes the `install.sh`.
# Idempotent
The scripts (`install.sh` `update-ags.sh` `checkdeps.sh` `setup.sh`) are and should be **idempotent**, which means that user can run this script for multiple times.

This is useful for debugging and a resumable installation, and also provide updater function somehow.
