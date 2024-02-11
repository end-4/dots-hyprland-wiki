---
title: m3ww
layout: /src/layouts/autonum.astro
---

:::caution[Cảnh báo]
Config này mình không dùng nữa mà nó cũng không hoạt động nên tốt nhất đừng dùng
:::

# Mô tả
- Config Eww dựa vào thiết kế của [Material Design 3](https://m3.material.io/)
# Installation
- Cài các gói rồi cho user vào nhóm `video`
```bash
# Normal packages
sudo pacman -S bc blueberry bluez boost boost-libs cliphist coreutils curl findutils fish fuzzel fzf gawk gnome-control-center gnome-keyring grim ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps polkit-gnome ripgrep slurp socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad tesseract
# AUR packages - installation with yay
yay -S cava eww-tray-wayland-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git lexend-fonts-git python-material-color-utilities python-pywal python-desktop-entry-lib python-poetry python-build python-pillow swww ttf-material-symbols-git wlogout
# Add user to `video` group
sudo usermod -aG video $(whoami)
```
- Copy
    - `.config`, `.local` vào home
    - Thư mục trong `.local/share/icons` vào `/usr/share/icons`
    - Xem muốn gì trong `Import manually` thì lấy

- Không bắt buộc:
   - Ghi chú: Nếu bạn không dùng nhiều layout bàn phím thì comment hết các thứ liên quan đến ibus trong `~/.config/hypr/execs.conf`. Nếu có dùng thì mình khuyên dùng fcitx5 hơn vì nó dễ dùng mà hoạt động ở Hyprland tốt hơn
   - Nếu muốn ảnh của nhạc/video ở trình duyệt thì lấy extension Plasma Browser Integration:
     - Cho [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
     - Cho [Firefox](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)

