---
title: Installation
layout: /src/layouts/autonum.astro
---

> [!IMPORTANT]
> - My config only provides user-level customization and is NOT a complete solution for a fresh install. You have to set up network, bluetooth, nvidia stuff, etc. yourself
> - I personally use (and highly recommend) EndeavourOS GNOME to not have to deal with all that hassle. Though you can use regular Arch just fine. **It's never necessary to reinstall your system for this!** If your distro isn't Arch(-based), you'll have to figure out the equivalents of packages below

> [!TIP]
> If you only have 8Gb of ram like me, you might wanna [set up zram](https://forum.endeavouros.com/t/enabling-zram-in-endeavouros/37746) (or swap) before starting the installation, since compiling Hyprland takes quite a bit of resources

# Automated installation (Arch distros only)
- Clone, checkout this branch, then run install script:
  ```bash
  cd ~/Downloads   # Let's not trash your home folder
  git clone https://github.com/end-4/dots-hyprland.git
  cd dots-hyprland && git checkout illogical-impulse
  ./install.sh
  ```

# Manual installation
- Get packages and add user to `video` and `input` group
  ```bash
  yay -S blueberry brightnessctl cliphist coreutils curl fish foot fuzzel gjs gnome-bluetooth-3.0 gnome-control-center gnome-keyring gobject-introspection grim gtk3 gtk-layer-shell libdbusmenu-gtk3 meson networkmanager npm plasma-browser-integration playerctl polkit-gnome python-pywal ripgrep sassc slurp starship swayidle typescript upower xorg-xrandr webp-pixbuf-loader wget wireplumber wl-clipboard tesseract yad ydotool adw-gtk3-git cava gojq gradience-git hyprland-git hyprpicker-git lexend-fonts-git python-material-color-utilities python-pywal python-poetry python-build python-pillow ttf-material-symbols-variable-git ttf-space-mono-nerd swaylock-effects-git ttf-jetbrains-mono-nerd wayland-idle-inhibitor-git wlogout wlsunset-git
  sudo usermod -aG video $(whoami)  # if this somehow doesn't work, just replace "$(whoami)" with your username
  sudo usermod -aG input $(whoami)  # same for this
  ```
- Install AGS **FROM SOURCE** (the AUR package is NOT up-to-date)
  ```bash
  cd ~/Downloads   # Let's not trash your home folder
  git clone --recursive https://github.com/Aylur/ags.git
  cd ags
  npm install
  meson setup build
  meson install -C build   # When asked to use sudo, make sure you say yes
  ```
- Clone and checkout this branch
  ```bash
  cd ~/Downloads   # Let's not trash your home folder
  git clone https://github.com/end-4/dots-hyprland.git
  cd dots-hyprland && git checkout illogical-impulse
  ```
- Copy `.config`, `.local` to your home folder (review before doing this or you might have your own config files undesirably overwritten)
- Get started with these keybinds
  - Press `Ctrl`+`Super`+`T` and select a picture for wallpaper
  - Press `Super`+`/` for a list of keybinds. Have fun!

- Optional
  - See if you're interested in anything in the `Import manually` folder
  - If you want media thumbnail from your browser to be shown, get the "Plasma browser integration" extension
    - For [Chromium](https://chrome.google.com/webstore/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai)
    - For [Firefox](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/)
