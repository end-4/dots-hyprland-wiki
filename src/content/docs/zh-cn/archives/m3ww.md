---
title: m3ww
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: 过时
    variant: caution
---

:::danger[重要警告]
这套配置已不再维护，建议不要使用。
:::

# 描述
- 最新的由 Eww 驱动的配置，遵循 [Material Design 3](https://m3.material.io/) 风格。
# 安装
- 安装依赖并将用户加入 `video` 组
```bash
# 普通软件包
sudo pacman -S bc blueberry bluez boost boost-libs cliphist coreutils curl findutils fish fuzzel fzf gawk gnome-control-center gnome-keyring grim ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps polkit-gnome ripgrep slurp socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad tesseract
# AUR 软件包 - 使用 yay 安装
yay -S cava eww-tray-wayland-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git lexend-fonts-git python-material-color-utilities python-pywal python-desktop-entry-lib python-poetry python-build python-pillow swww ttf-material-symbols-git wlogout
# 将用户加入 `video` 组
sudo usermod -aG video $(whoami)
```
- 复制以下
    - `.config`, `.local` ：到你的家目录下
    - `.local/share/icons` 下的目录：到 `/usr/share/icons` 下
    - 文件夹 `Import manually` 里的东西：按你的需求来

- 可选
  - 注：若你不需要多种键盘布局，将 `~/.config/hypr/execs.conf` 中与 ibus 相关的注释掉。若你需要，你可能想改用 fcitx5（尽管它不会集成于任务栏中的图标）
  - 若想显示来自浏览器的媒体缩略图，获取扩展程序 "Plasma browser integration"
    - 对于 [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
    - 对于[火狐](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)
