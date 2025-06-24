---
title: m3ww
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Obsoleto
    variant: caution
lastUpdated: 2024-12-13
---

:::danger[Alerta]
Este conjunto de configuraciones ya no se mantiene. Recomendamos no usarlas.
:::

# Descripción
- La última configuración impulsada por Eww que sigue el estilo de [Material Design 3](https://m3.material.io/)
# Instalación
- Instalar dependencias y agregar usuario al grupo `video`
```bash
# Paquetes normales
sudo pacman -S bc blueberry bluez boost boost-libs cliphist coreutils curl findutils fish fuzzel fzf gawk gnome-control-center gnome-keyring grim ibus imagemagick libqalculate light networkmanager network-manager-applet nlohmann-json pavucontrol plasma-browser-integration playerctl procps polkit-gnome ripgrep slurp socat sox starship udev upower util-linux xorg-xrandr wget wireplumber yad tesseract
# Paquetes AUR - instalación con yay
yay -S cava eww-tray-wayland-git geticons gojq gtklock gtklock-playerctl-module gtklock-powerbar-module gtklock-userinfo-module hyprland-git lexend-fonts-git python-material-color-utilities python-pywal python-desktop-entry-lib python-poetry python-build python-pillow swww ttf-material-symbols-git wlogout
# Agregar usuario al grupo `video`
sudo usermod -aG video $(whoami)
```
- Copiar estos
    - `.config`, `.local` a tu carpeta de inicio
    - Carpetas en `.local/share/icons` a tu `/usr/share/icons`
    - Cosas en la carpeta `Import manually` si las necesitas

- Opcional
   - Nota: Si no necesitas múltiples distribuciones de teclado, comenta todo lo relacionado con ibus en `~/.config/hypr/execs.conf`. En caso de que sí, podrías querer usar fcitx5 en su lugar (aunque no se integrará con el icono en la barra)
   - Si quieres que se muestren miniaturas de medios desde tu navegador, obtén la extensión "Plasma browser integration"
     - Para [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
     - Para [Firefox](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)
