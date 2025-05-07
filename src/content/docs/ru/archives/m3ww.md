---
title: m3ww
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Устарело
    variant: caution
lastUpdated: 2025-05-01
---

:::danger[Внимание]
Данные сборники конфигураций больше не поддерживаются. Мы не рекомендуем их использовать.
:::

# Описание
- Сборка на Eww вдохновленная [Material Design 3](https://m3.material.io/)
# Установка
- Установите зависимости и добавьте пользователя в группу 'video'
```bash
# Стандартные пакеты
sudo pacman -S bc blueberry bluez boost boost-libs cliphist coreutils curl findutils fish fuzzel fzf gawk gnome-control-center gnome-keyring grim ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps polkit-gnome ripgrep slurp socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad tesseract
# Пакеты из AUR - установка через yay
yay -S cava eww-tray-wayland-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git lexend-fonts-git python-material-color-utilities python-pywal python-desktop-entry-lib python-poetry python-build python-pillow swww ttf-material-symbols-git wlogout
# Добавление пользователя в группу 'video'
sudo usermod -aG video $(whoami)
```
- Скопировать
    - `.config`, `.local` в вашу домашнюю директорию
    - Директории из `.local/share/icons` в `/usr/share/icons`
    - Опционально из папки `Import manually` по необходимости

- Дополнительно
   - Если вы не используете несколько раскладок клавиатуры, закомментируйте все, что связано с ibus в  `~/.config/hypr/execs.conf`. Если используете, то лучше использовать fcitx5 (правда оно не будет интегрировано с иконкой на панели)
   - Если хотите, чтобы показывалась плашка проигрываемого материала из браузера, то установите расширение "Plasma browser integration"
     - Для [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
     - Для [Firefox](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)

