---
title: Contribute to dots-hyprland-wiki
layout: /src/layouts/autonum.astro
sidebar:
  label: Contribute to this site
  order: 05
lastUpdated: 2024-02-24
---

The repo of this doc site is [here](https://github.com/end-4/dots-hyprland-wiki) and it's open to contribution.

**We sincerely thank all contributors.**

# What to contribute
You're welcomed to submit any kind of beneficial Pull Request, though it's our final decision to merge it or not.

If you're unsure about a possible PR, you may create a [Discussion](https://github.com/end-4/dots-hyprland-wiki/discussions) before you work on it.

**Here are some common types of contribution:**

## Translation
This site has i18n support, and we need your help to finish l10n (i.e. translation).

:::note
Please don't waste your time on translating Dev Notes. See [#1](https://github.com/end-4/dots-hyprland-wiki/issues/1#issuecomment-1938696111) for reason.
:::

## Content
Typically, if you have successfully contributed a new function/workflow/... to [dots-hyprland](https://github.com/end-4/dots-hyprland),
and if it needs documentation, then you're very welcomed to submit a PR here to document it.

Troubleshooting related contents are also welcomed.

**Please see [here](../doc-site) for reference, including how to preview the site (i.e. start local dev server).**
:::caution
Always prioritize updating the English documents,
so that other languages can be uniformly updated through English translation.
:::

# How to contribute
The following steps details on how to contribute using Git and GitHub.

You must have a GitHub account to proceed.

## Setup GitHub SSH
See [GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for instructions.

Or, to ensure that you have GitHub SSH configured well on your local machine,
run `ssh -T git@github.com` in terminal, and if you see:
```plain
Hi <Your GitHub username>! You've successfully authenticated, but GitHub does not provide shell access.
```
Then you're all set.

## Get this repo
[Fork this repo online](https://github.com/end-4/dots-hyprland-wiki/fork), and then `git clone` the forked repo to your local machine.

## Make changes (with l10n example)
`cd` to the folder of the cloned repo so that you can make futher changes.

:::caution
Of course, before making every change, you should know what you're doing.
:::

**As for l10n (translation), follow the steps below:**
### Manage locales
On your local machine, go to the forked repo, edit `astro.config.mjs` and find the languages under `locales: `.

If your language is not listed or is commented, add your language.
Example:
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
- Sometimes you should use lowercase for the key (or name) for the locale, e.g. `zh-cn`.
- But sometimes not, e.g. `zh-CN`.

It's complicated to detail the rule, please just follow the example.
:::

You may also add translation for the labels on sidebar under the `sidebar: `.
Example:
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
Please pay attention to the formatting of `mjs` and do not omit commas, quotation marks, or parentheses.
:::

You should also translate the message in `l10n-notify/l10n-notify.json`, e.g. for `zh-CN`:
```json title="l10n-notify/l10n-notify.json" ins={4}
{
  "en": "<b>This page is an outdated translation.</b> The original version in English was last updated on <b>LASTUPDATED_OF_ORIGINAL</b>, but this translated version was last updated on <b>LASTUPDATED_OF_TRANSLATED</b>.",
  ...
  "zh-cn": "<b>此页面的翻译已过时。</b>其英语原文最近更新于 <b>LASTUPDATED_OF_ORIGINAL</b>，而此译文最近更新于 <b>LASTUPDATED_OF_TRANSLATED</b>。",
  ...
}
```
The `LASTUPDATED_OF_ORIGINAL` and `LASTUPDATED_OF_TRANSLATED` are to be replaced when deploying. Please preserve them as they are.

### Translate pages
Go to directory `src/content/docs/`.
- Source language (English): `src/content/docs/en/`.
- Target language (your language): `src/content/docs/<lang>/`.

If target language directory does not exists, `mkdir` to create it first.

Target language directory has exact the same folder structure and filename as the source language directory,
and non-existing files and directory in target language directory will fallback to source language (English).

E.g. for Simplified Chinese, `src/content/docs/zh-cn/general/showcase.md` is the translated version of `src/content/docs/en/general/showcase.md`.

:::note
Again, don't translate Dev Notes under `src/content/docs/en/dev/`, i.e. let them fallback to English.
:::

:::caution
Again, please pay attention to lowercase problem, e.g. `zh-cn` and `zh-CN`.
:::

**After you've finished translation for a document:**
- Update the value of `lastUpdated` entry in frontmatter to **your current time** in `yyyy-mm-dd`, e.g. `lastUpdated: 2024-02-18`.
  - This value is used for comparison with the original document by GitHub Action to automatically generate outdated notice when applicable.

Example:
```md title="foo.md" del={5} ins={6}
---
title: 示例文档
sidebar:
  label: 示例
lastUpdated: 2024-02-16
lastUpdated: 2024-02-18
---
```

### Translate UI (Optional)
Starlight UI already has built-in translation for some languages.
You may still translate to override it if you think it's necessary.

- The source file in English: see [here](https://starlight.astro.build/guides/i18n/#translate-starlights-ui).
- To translate, edit the file under `src/content/i18n/`, eg. for Simplified Chinese: `src/content/i18n/zh-CN.json`.

## Upload changes
When you've finished making changes to the repo:
  - `git add .` to track untracked changes under current directory.
  - `git status` to re-check what you have changed.
    - If you have unexpectedly changed a file, run `git restore <file>` to restore it.
  - `git commit -m '<Commit message>'` to commit the tracked changes with your customed `<Commit message>`.
  - `git push` to push new commits to the repo on GitHub.

## Create a Pull Request
Go to the forked repo online, click on `Contribute` and then `Open pull request` to submit a Pull Request.

Remember to detail what you have done when you submit.
E.g. if you've done translation, tell which language you have translated to.
