---
title: Install scripts
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
lastUpdated: 2025-02-04
---
# Help wanted
## Support on each distro
`./install.sh` detects the distro ID and try to use `./dist-<DISTRO_ID>/install-deps.sh` for dependency installation if it exists.
  - **We need more scripts `dist-<DISTRO_ID>/install-deps.sh`** to support specific distro using their system package manager.
    - Run `./diagnose` to get the actual value of `<DISTRO_ID>` after `distro ID:`, such as `fedora`.
    - This script should be idempotent.
    - This script should reflect the equivalents of the packages which `./dist-arch/install-deps.sh` installed. They are mainly from the value of array `depends` inside those `./dist-arch/*/PKGBUILD`.
      - To get info of a package (e.g. what executable(s) it provides), search it on [Arch Linux Packages](https://archlinux.org/packages) or the [AUR](https://aur.archlinux.org/packages).
    - If possible, please create "meta packages" using the prefix `illogical-impulse-`, so that user can remove them easily without unexpectedly removing the packages that installed by the user for other purposes.

P.S. similar for `./dist-<DISTRO_ID>/install-setup.sh`, but generally most distros can just use the `./dist-fallback/install-setup.sh` for this part, so it's not a big deal.

## Cross-distro support via Nix
When `--via-nix` is passed to `install.sh`, `./dist-nix/install-deps.sh` (still WIP) will be used. It's not for NixOS, but for nearly every distro.
  - **We need help on `dist-nix/install-deps.sh`.** See [issue #1061](https://github.com/end-4/dots-hyprland/issues/1061).


# Main method
The related scripts and files around `install.sh` belongs to "main method", which is developed and maintained mainly by clsty.
## Idempotent
The scripts are and should be **idempotent**, i.e. capable for running multiple times.

This is useful for debugging and a resumable installation, and also provide updating function somehow.
## Structrue
- Main script: `install.sh`
- `scriptdata/`: 
  - `scriptdata/lib/`: Reusable codes to be sourced at the beginning.
  - `scriptdata/step/`: The actual steps for installting.
  - `scriptdata/uv/`: For python and uv dependencies.
- `cache/`: When the script build something from source, they're stored under `./cache/`. It's included in `.gitignore`.

## Online script
`setup.sh`:
- Stored in the repo of dots-hyprland-wiki to be served by the doc site directly.
- When executed, it downloads the dots-hyprland repo and then executes the `install.sh`.

## Nix (WIP)
See [issue#1061](https://github.com/end-4/dots-hyprland/issues/1061) for detail.
