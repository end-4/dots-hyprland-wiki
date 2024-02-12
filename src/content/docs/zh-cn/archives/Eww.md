---
title: Eww（多个）
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: 过时
    variant: caution
---

:::danger[重要警告]
这几套配置已不再维护，建议不要使用。
:::

# 描述
几套配置，包括 `windoes`、`hybrid` 和 `NovelKnock` 等。
# 安装
- 依赖：参见分支所特定的依赖项列表
- 复制以下
    - `.config`, `.local` ：到你的家目录下
    - `.local/share/icons` 下的目录：到 `/usr/share/icons` 下
    - 文件夹 `Import manually` 里的东西：按你的需求来

 ## 性能
|  ⌄  | 请使用 | 不推荐 | 备注                 |
| --- | ------ | ----------- | ------------------------- |
| 内核 |     | cachyos, xanmod | 不要滥用节能程序。原因未知，来源于作者的个人经验 |
| 登录 shell | bash/zsh | fish | 在一个终端里使用 fish 是可以的，作者经常这样做 |

 ## 配置
- eww 配置仅当在 `~/.config/eww` 目录下才能正常工作
- 使用 `eww daemon` 启动 eww
- 要打开顶部栏：`eww open bar`
- 要打开 Windows 栏：`eww open winbar`（`windoes`/`hybrid` 分支）
- 要打开底部栏：`eww open bottomline`（如果点击屏幕底部边缘，音乐窗口会打开）
- 打开概览（中键点击工作区）并等待 10 秒钟（以生成应用程序搜索缓存，否则图标将无法正确显示）
## 使用
- 音乐控制：中键点击播放/暂停，右键点击下一曲，滚动调整音量
- 要打开概览，中键/右键点击工作区指示器，或运行 `eww open overview`
- 在概览中，键入以搜索应用程序（详见下文）
## 搜索
- 键入以搜索应用程序
- 键入以数字开头的数学表达式，使用 `qalc` 进行计算
- `>save THEME`：保存当前的配色方案，其中 THEME 是名称。
- `>load THEME`：加载已保存的主题。在输入时会显示可用的主题。
- `>music`：从当前媒体缩略图获取配色方案
- `>wall`：从位于 `~/.config/eww/images/wallpaper/wallpaper` 的壁纸获取配色方案
- `>light`：记住在下次生成颜色时使用浅色模式
- `>dark`：记住在下次生成颜色时使用深色模式
- `>one`：记住在下次生成颜色时为任务栏图标仅使用一种颜色
- `>multi`：记住在下次生成颜色时任务栏图标使用多种颜色
- `>r`：重新加载（终止并重新启动带有默认任务栏的 eww）
