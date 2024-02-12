---
title: m3ww
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Deprecated
    variant: caution
---

:::danger[Alert]
This set of configs are no longer maintained. We recommend against using them.
:::

# Description
- The latest Eww-powered setup that follows the style of [Material Design 3](https://m3.material.io/)
# Installation
- Install dependencies and add user to `video` group
```bash
# Normal packages
sudo pacman -S bc blueberry bluez boost boost-libs cliphist coreutils curl findutils fish fuzzel fzf gawk gnome-control-center gnome-keyring grim ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps polkit-gnome ripgrep slurp socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad tesseract
# AUR packages - installation with yay
yay -S cava eww-tray-wayland-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git lexend-fonts-git python-material-color-utilities python-pywal python-desktop-entry-lib python-poetry python-build python-pillow swww ttf-material-symbols-git wlogout
# Add user to `video` group
sudo usermod -aG video $(whoami)
```
- Copy these
    - `.config`, `.local` to your home folder
    - Folders in `.local/share/icons` to your `/usr/share/icons`
    - Stuff in `Import manually` folder if you need them

- Optional
   - Note: If you don't need multiple keyboard layouts, comment out anything related to ibus in `~/.config/hypr/execs.conf`. In case you do, you might want to use fcitx5 instead (though it won't integrate with the icon on the bar)
   - If you want media thumbnail from your browser to be shown, get the "Plasma browser integration" extension
     - For [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
     - For [Firefox](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)

