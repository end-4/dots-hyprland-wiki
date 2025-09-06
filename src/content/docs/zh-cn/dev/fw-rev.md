---
title: 框架综述
layout: /src/layouts/autonum.astro
sidebar:
  label: Frameworks Rev.
  order: 50
lastUpdated: 2024-02-18
---

本文档包含关于框架的参考资料、实践经验及个人见解。

:::note[框架？]
此处框架特指在Wayland环境下提供“工具栏”功能的程序/平台，但不限于工具栏类应用。
即便严格定义不属于框架范畴，简单的“工具栏”程序在此仍统称为“框架”。
:::

:::caution[说明]
本文可能包含个人主观观点。虽不排除客观性，但仍难以保证绝对客观。
部分内容源于个人实践，故难保证时效性与准确性。
欢迎随时在此处[讨论](https://github.com/end-4/dots-hyprland-wiki/discussions)。
:::

参考文献：[Arch Wiki](https://wiki.archlinux.org/title/List_of_applications/Other#Taskbars)

# 小部件系统
_这些小部件系统提供声明式创建方式，可将小部件放置于Layer Shells（若可行，亦可适配X11等同类系统）。_

## EWW
- [GitHub](https://github.com/elkowar/eww) • [文档](https://elkowar.github.io/eww)
- 优点
  - 全能型小部件系统，适合具备基础编程经验的用户。
  - 支持X11与Wayland。
  - 操作极其简便
- 缺点
  - ...但创建复杂小部件时速度极慢。因其每次更新使用变量时都会销毁并重建小部件，使用循环时尤为严重...
  - 缺乏内部变量更新机制，所有操作均需通过shell实现。

## AGS
- [GitHub](https://github.com/Aylur/ags) • [文档](https://aylur.github.io/ags-docs)

- 优点
  - AGS比EWW更强大高效，因其避免了无谓的小部件销毁重建
  - 通过GJS配置，具备高度灵活性，无需依赖脚本（脚本的监听/轮询会增加延迟）
  - 与普遍认知相反，JS驱动并不意味着耗电。对部分用户（包括我本人和end_4）而言，其功耗甚至低于Waybar。
- 缺点
  - 图标尺寸处理时，常需等待CSS加载才能获取字体缩放数据，体验欠佳。
  - 循环组件的命令式操作存在隐患：若销毁后忘记将组件引用设为空值，可能引发问题。

## Quickshell
- [GitHub](https://github.com/outfoxxed/quickshell)
- 基于QtQuick的桌面壳工具包，灵感源自AGS
- 这是令我兴奋的新项目，尚未尝试但即将体验。目前仍处于开发阶段，持续更新中。
- 开发者透露计划添加窗口缩略图功能，这将成为杀手级特性。

## Fabric
- [GitHub](https://github.com/Fabric-Development/fabric)
- GTK Python控件框架

## Potato
- [GitHub](https://github.com/T0kyoB0y/PotatoWidgets)
- 另一款GTK Python控件框架

# 简约工具栏
_这类工具栏采用预制模块，支持完全水平/垂直调整控件顺序并应用样式，功能较为基础._

## Waybar
- [GitHub](https://github.com/Alexays/Waybar) • [文档](https://github.com/Alexays/Waybar/wiki)
- 面向Wayland的简洁通用工具栏。

## HybridBar
- [GitHub](https://github.com/vars1ty/HybridBar)

## Polybar
- [GitHub](https://github.com/polybar/polybar)
