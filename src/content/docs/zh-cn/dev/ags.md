---
title: AGS
layout: /src/layouts/autonum.astro
sidebar:
  label: AGS
  order: 40
lastUpdated: 2025-04-03
---

# 概述
## 用户选项
- 默认值位于 `.config/ags/modules/.configuration/default_options.jsonc`
- 配置选项作为 `userOptions` 在配置中全局可用

## 代码格式
- 缩进：4 个空格
- `if` 的闭合括号不应与其 `else` 在同一行
- 就是这些了。请运用一些常识……

# 样式
## 尺寸
- 使用了 `rem`，因为这使得通过设置字体大小来缩放元素变得简单
- TL;DR（一言以蔽之）：将系统字体大小设置为 11pt，使用左侧边栏上的 Conversions 工具将 px 转换为 rem
- _但是为什么这些值这么奇怪？_
  - 最初，我使用 px 来设置所有样式，但后来我决定使用 `rem`
  - 我经常使用 5、10、15 等像素值
  - 我使用的字体大小是 11pt = 14.6667px，这就是 1rem 的大小……

## 文件
- `_material.scss` 存放生成的 material 颜色
- `_wal.scss` 存放生成的 pywal 颜色
- `_colors.scss` 调整并创建 material 颜色的变体
- `_musicwal.scss` 和 `_musicmaterial` 存放为封面艺术生成的颜色
- 其他文件用于实际组件
