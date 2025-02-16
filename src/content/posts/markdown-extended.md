---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '探索 Fuwari 中的 Markdown 扩展功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
series: 示例
draft: false 
---

## GitHub 仓库卡片
你可以添加动态卡片链接到 GitHub 仓库。页面加载时，仓库信息会通过 GitHub API 自动获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<所有者>/<仓库名>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框 (Admonitions)

支持以下类型的提示框：`note`（注意）、`tip`（提示）、`important`（重要）、`warning`（警告）、`caution`（谨慎）

:::note
高亮用户需要留意的信息，即使快速浏览时也不应忽略。
:::

:::tip
帮助用户更高效完成任务的额外信息。
:::

:::important
用户成功操作所需的关键信息。
:::

:::warning
因潜在风险需用户立即关注的紧急内容。
:::

:::caution
操作可能导致的负面后果。
:::

### 基础语法

```markdown
:::note
高亮用户需要留意的信息，即使快速浏览时也不应忽略。
:::

:::tip
帮助用户更高效完成任务的额外信息。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 风格的语法](https://github.com/orgs/community/discussions/16925)同样支持。

```
> [!NOTE]
> GitHub 风格的语法已支持。

> [!TIP]
> GitHub 风格的语法已支持。
```