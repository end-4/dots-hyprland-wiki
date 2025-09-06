---
title: 为 dots-hyprland-wiki 贡献
layout: /src/layouts/autonum.astro
sidebar:
  label: Contribute to this site
  order: 05
lastUpdated: 2024-02-24
---

本站点文档的仓库（repo）[在这里](https://github.com/end-4/dots-hyprland-wiki)，欢迎大家为其做贡献。

**我们真诚地感谢所有贡献者。**

# 如何贡献

我们欢迎您提交任何有益的 Pull Request，尽管最终是否合并由我们决定。

如果您对某个可能的 PR 不确定，可以在着手工作前创建一个 [Discussion](https://github.com/end-4/dots-hyprland-wiki/discussions)。

**以下是一些常见的贡献类型：**

## 翻译

本站点支持 i18n，我们需要您的帮助来完成 l10n (即本地化，也就是翻译)。

:::note
请不要浪费时间翻译 Dev Notes。原因请参见 [\#1](https://github.com/end-4/dots-hyprland-wiki/issues/1#issuecomment-1938696111)。
:::

## 内容

通常，如果您已成功为 [dots-hyprland](https://github.com/end-4/dots-hyprland) 贡献了新的功能/工作流/…，并且需要文档，那么我们非常欢迎您在此提交 PR 来记录它。

与故障排除（Troubleshooting）相关的内容也同样受欢迎。

**请参阅[此处](https://www.google.com/search?q=../doc-site)获取参考信息，包括如何预览站点（即启动本地开发服务器）。**
:::caution
始终优先更新英文文档，
以便其他语言可以通过英文翻译进行统一更新。
:::

# 如何贡献

以下步骤详细介绍了如何使用 Git 和 GitHub 进行贡献。

您必须拥有一个 GitHub 帐户才能继续。

## 设置 GitHub SSH

请参阅 [GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) 获取说明。

或者，为了确保您的本地机器已正确配置 GitHub SSH，在终端中运行 `ssh -T git@github.com`，如果您看到以下内容：

```plain
Hi <Your GitHub username>! You've successfully authenticated, but GitHub does not provide shell access.
```

则表示一切就绪。

## 获取此仓库

[在线 Fork 此仓库](https://github.com/end-4/dots-hyprland-wiki/fork)，然后 `git clone` Fork 后的仓库到您的本地机器。

## 做出更改 (以 l10n 为例)

`cd` 到克隆仓库的文件夹，以便您可以进行后续更改。

:::caution
当然，在每次更改之前，您都应该知道自己在做什么。
:::

**对于 l10n (翻译)，请遵循以下步骤：**

### 管理语言环境 (locale)

在您的本地机器上，进入 Fork 后的仓库，编辑 `astro.config.mjs` 并找到 ` locales:  ` 下的语言。

如果您的语言未列出或被注释掉了，请添加您的语言。
例如：

```js title="astro.config.mjs" ins={7-10}
...
      locales: {
        'en': {
          label: 'English', // Engligh
          lang: 'en',
        },
        'zh-cn': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
...
```

:::caution

  - 有时，您应该对语言环境的 key (或名称) 使用小写，例如 `zh-cn`。
  - 但有时不应如此，例如 `zh-CN`。

详细说明此规则很复杂，请遵循示例即可。
:::

您还可以为 ` sidebar:  ` 下侧边栏上的标签添加翻译。
例如：

```js title="astro.config.mjs" ins={6}
...
      sidebar: [
        {
          label: 'General',
          translations: {
            'zh-CN': '通用',
          },
          autogenerate: { directory: 'general' },
        },
...
```

:::caution
请注意 `mjs` 的格式，不要省略逗号、引号或括号。
:::

您还应该翻译 `l10n-notify.json` 中的消息，例如 `zh-CN`：

```json title="l10n-notify.json" ins={4}
{
  "en": "This page is an outdated translation. The original version in English was last updated on: ",
  ...
  "zh-cn": "此页面的翻译已过时。其英语原文的最新版本的时间是：",
  ...
}
```

### 翻译页面

进入 `src/content/docs/` 目录。

  - 源语言（英语）：`src/content/docs/en/`。
  - 目标语言（您的语言）：`src/content/docs/<lang>/`。

如果目标语言目录不存在，请先使用 `mkdir` 创建它。

目标语言目录与源语言目录拥有完全相同的文件夹结构和文件名，并且目标语言目录中不存在的文件和目录将回退到源语言（英语）。

例如，对于简体中文，`src/content/docs/zh-cn/general/showcase.md` 是 `src/content/docs/en/general/showcase.md` 的翻译版本。

:::note
再次强调，不要翻译 `src/content/docs/en/dev/` 下的 Dev Notes，即让它们回退到英文。
:::

:::caution
再次强调，请注意大小写问题，例如 `zh-cn` 和 `zh-CN`。
:::

**当您完成一个文档的翻译后：**

1.  将 frontmatter 中 `lastUpdated` 条目的值更新为**您当前的日期**，格式为 `yyyy-mm-dd`，例如 `lastUpdated: 2024-02-18`。
2.  如果您在文档顶部看到 "caution[l10n-notify]" 行，请删除这 3 行。

示例：

```md title="foo.md" del={5,8-10} ins={6}
---
title: 示例文档
sidebar:
  label: 示例
lastUpdated: 2024-02-16
lastUpdated: 2024-02-18
---
:::caution[l10n-notify]
此页面的翻译已过时。其英语原文的最新版本的时间是：2024-02-17
:::
```

### 翻译 UI (可选)

Starlight UI 已经内置了一些语言的翻译。如果认为有必要，您仍然可以进行翻译以覆盖它。

  - 英文源文件：请参阅[此处](https://starlight.astro.build/guides/i18n/#translate-starlights-ui)。
  - 要进行翻译，请编辑 `src/content/i18n/` 下的文件，例如对于简体中文：`src/content/i18n/zh-CN.json`。

## 上传更改

当您完成对仓库的更改后：

  - `git add .` 以跟踪当前目录下所有未跟踪的更改。
  - `git status` 以再次检查您更改了哪些文件。
      - 如果您意外地更改了某个文件，请运行 `git restore <file>` 以恢复它。
  - `git commit -m '<提交信息>'` 以提交跟踪的更改并附上您的自定义 `<提交信息>`。
  - `git push` 以将新提交推送到 GitHub 上的仓库。

## 创建 Pull Request

进入你 Fork 出来的仓库主页，点击 `Contribute`，然后选择 `Open pull request` 来提交你的 PR。

提交时请务必详细说明您所做的工作。例如，如果您进行了翻译，请说明您翻译了哪种语言。
