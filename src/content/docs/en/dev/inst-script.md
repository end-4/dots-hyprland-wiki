---
title: Install scripts
layout: /src/layouts/autonum.astro
sidebar:
  order: 20
lastUpdated: 2025-10-06
---
# Help wanted
## Support on each distro
`./install.sh` detects the distro ID and try to use `./dist-<DISTRO_ID>/install-deps.sh` for dependency installation if it exists.

**We need more scripts `dist-<DISTRO_ID>/install-deps.sh`** to support specific distro using their system package manager.

:::tip[Distro ID]
- Run `./diagnose` to get the actual value of `<DISTRO_ID>` after `distro ID:`, such as `fedora`.
:::

Requirements:
- This script should be written in Bash.
- This script should be idempotent.
- This script should reflect or cover the equivalents of the packages which `./dist-arch/install-deps.sh` installed.
  - They are mainly from the value of array `depends` inside those `./dist-arch/*/PKGBUILD`.
  - Some of them are built locally following the PKGBUILD.
- If needed, also create `./dist-<DISTRO_ID>/install-setups.sh`. When it does not exist, `install.sh` will use `./dist-fallback/install-setups.sh` instead, which may be not suitable for your distro.

:::tip[Tips when writing the script]
- Environment variables and functions defined inside `scriptdata/lib/` can be used.
  - The functions `v()`, `showfun()` and `x()` are especially important.
- Run `./install.sh --skip-allgreeting --skip-allfiles --skip-allsetups` to test `dist-<DISTRO_ID>/install-deps.sh` quickly.
- To get info of a package (e.g. what executable(s) it provides), search it on [Arch Linux Packages](https://archlinux.org/packages) or the [AUR](https://aur.archlinux.org/packages).
- (WIP) Helpful information inside `scriptdata/deps-info.md`: [issue#2102](https://github.com/end-4/dots-hyprland/issues/2102)
:::

Optional:
- Create "meta packages" using the prefix `illogical-impulse-`, so that user can remove them easily without unexpectedly removing the packages that installed by the user for other purposes.
- Create `dist-<DISTRO_ID>/README.md`.
- Create `dist-<DISTRO_ID>/.gitignore` if files generated during building should not be tracked by git, for example binary, cache, fetched source tree or archive.
- Subscribe [discussion#2140](https://github.com/end-4/dots-hyprland/discussions/2140) to get notifications about updates on `dist-arch/` by GitHub Action bot in future.

:::tip[outdate-detect-mode]
`dist-<DISTRO_ID>/outdate-detect-mode` is a text file. Just use `AUTO` as its content in your PR.

For possible values, see the definition of function `outdate_detect()` in [1.install-deps-selector.sh](https://github.com/end-4/dots-hyprland/blob/main/scriptdata/step/1.install-deps-selector.sh).
:::

## Cross-distro support via Nix
When `--via-nix` is passed to `install.sh`, `./dist-nix/install-deps.sh` (still WIP) will be used. It's not for NixOS, but for nearly every distro.

**We need help on `dist-nix/install-deps.sh`.**

See [issue #1061](https://github.com/end-4/dots-hyprland/issues/1061).


# Main method
The related scripts and files around `install.sh` belongs to "main method", which is developed and maintained mainly by clsty.
## Idempotent
The scripts are and should be **idempotent**, i.e. capable for running multiple times.

This is useful for debugging and a resumable installation, and also provide updating function somehow.
## Structure
- Main script: `install.sh`
- `scriptdata/`: 
  - `scriptdata/lib/`: Scripts containing reusable codes to be sourced at the beginning.
  - `scriptdata/step/`: Scripts containing the actual steps for installing to be sourced when proceeding.
  - `scriptdata/uv/`: For python dependencies handled by uv.
- `dist-<DISTRO_ID>/`: The core part is collection of the distro specific install scripts which `install.sh` select to use according to the current distro. It also contains other files needed by or related to the distro specific scripts.
- `dist-nix/`: Used when `--via-nix` is passed. Still WIP.
- `cache/`: When the script build something from source, they're stored under `./cache/`. It's included in `.gitignore`.

## Online script
`setup.sh`:
- Stored in the repo of dots-hyprland-wiki to be served by the doc site directly.
- When executed, it downloads the dots-hyprland repo and then executes the `install.sh`.

## Nix (WIP)
See [issue#1061](https://github.com/end-4/dots-hyprland/issues/1061) for detail.
