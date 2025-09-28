---
title: Frameworks Review
layout: /src/layouts/autonum.astro
sidebar:
  label: Frameworks Rev.
  order: 50
lastUpdated: 2024-02-18
---

This note contains some references, experiences and opinions on the frameworks.

:::note[Frameworks?]
The frameworks here refer to the programs/platforms on Wayland that provide "bar" thingy, but not limited to bars.
Simple "bar" program will still be called a "Framework" here, despite it's actually not.
:::

:::caution[Clarification]
This note may contain personal subjective opinions. Objectivity is not excluded, but it is still difficult to guarantee.
Some contents come from personal experiences, so it is difficult to guarantee topicality and correctness.
However, feel free to discuss it [here](https://github.com/end-4/dots-hyprland-wiki/discussions).
:::

References: [Arch Wiki](https://wiki.archlinux.org/title/List_of_applications/Other#Taskbars)

# Widget systems
_These widget systems provide a declarative way to create widgets and put them on Layer Shells (and, if possible, whatever the equivalent on X11 is)._

## EWW
- [GitHub](https://github.com/elkowar/eww) • [Docs](https://elkowar.github.io/eww)
- Pros
  - An all-rounder widget system suitable for anyone with a little bit of programming experience.
  - It supports X11 and Wayland.
  - It's incredibly easy to use
- Cons
  - ...but at the same time incredibly slow when you create complex widgets. This is because it destroys and recreates the widgets every time their used variables are updated. It's worst when you use loops...
  - No internal way to update variables. It's all done through shell.

## AGS
- [GitHub](https://github.com/Aylur/ags) • [Docs](https://aylur.github.io/ags-docs)

- Pros
  - AGS is more capable and performant than EWW, since it doesn't unnecessarily destroy and recreate widgets. 
  - Configured in GJS, it's flexible enough so you don't have to rely on scripts (the listening/polling of which adds some delay)
  - In contrary to what people think, JS-powered does not mean power-consuming. For some people (me, end_4, included), it's even more power-saving than Waybar.
- Cons
  - For icon sizes, it's often a pain having to wait for the CSS to load before being able to retrieve some font-size-scalable data.
  - Working with looped widgets in an imperative way could be a pain if you forget to set a widget reference to null after destroying.

## Quickshell
- [GitHub](https://github.com/outfoxxed/quickshell)
- A QtQuick-based desktop shell toolkit inspired by AGS
- This is something I'm excited about, but haven't tried yet and will soon. It's largely WIP, and is actively being developed.
- Dev guy says he has plans for window thumbnails, which would be a killer feature.

## Fabric
- [GitHub](https://github.com/Fabric-Development/fabric)
- A GTK Python widget framework

## Potato
- [GitHub](https://github.com/T0kyoB0y/PotatoWidgets)
- Another GTK Python widget framework

# Simple bars
_These are simple bars with premade modules. You can change the order of the widgets fully horizontally or vertically and give them some styles, but that's about it._

## Waybar
- [GitHub](https://github.com/Alexays/Waybar) • [Docs](https://github.com/Alexays/Waybar/wiki)
- A simple, widely used bar for Wayland.

## HybridBar
- [GitHub](https://github.com/vars1ty/HybridBar)

## Polybar
- [GitHub](https://github.com/polybar/polybar)
