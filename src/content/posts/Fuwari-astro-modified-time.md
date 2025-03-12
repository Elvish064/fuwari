---
title: "[Fuwari]在文末添加最后修改时间"
published: 2025-03-08
updated: 2025-03-08
description: "根据Astro docs介绍的方法实现"
image: ""
tags: [Fuwari,Blog]
category: Fuwari
series: Fuwari
draft: true
lang: 'zh_CN'
---

# 方案
Astro官方给出的方法是：

https://docs.astro.build/zh-cn/recipes/modified-time/

基本上按照该文档来就行

# 操作步骤

## 1.安装用于修改和格式化时间的[Day.js](https://www.npmjs.com/package/dayjs)
```bash
pnpm add dayjs
```

## 2.新建remark插件
:::important
如果你的博客**不是部署在自己的服务器**，而是部署在[Cloudflare](https://cloudflare.com)、[Vercel](https://vercel.app)等云托管平台（即每次构架都需要从你的Github仓库拉取文件），则**无法利用插件自动获取文件修改时间**，请跳转至[]()更改为手动填写文件编辑时间
:::

```mjs title="src/plugins/remark-modified-time.mjs"
import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = result.toString();
  };
}
```

## 3.添加配置
```mjs title="astro.config.mjs" ins={2}
...
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'
 markdown: {
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      parseDirectiveNode,
      remarkModifiedTime,
    ],


```