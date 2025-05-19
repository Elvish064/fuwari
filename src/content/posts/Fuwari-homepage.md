---
title: "[Fuwari]给博客添加主页"
published: 2025-05-18
updated: 2025-05-18 11:07:00
description: "将根目录/设置为主页，并将文章列表页面移至/blog/"
image: ""
tags: [Fuwari,Blog]
category: Fuwari
series: Fuwari
draft: false
lang: 'zh_CN'
---

# 引子
之前一直想要将博客的根目录改为主页，最近研究了一下，下面是简单的实现方法：
:::note
请在操作前做好原项目备份

:::

# 操作步骤
## 1.更改页面路径
将`src/pages/[...page].astro`移至新建目录`src/pages/blog/[...page].astro`<br/>
并新建文件`src/pages/index.astro`

```js title="index.astro" ins={1-11}
---
import ContentCard from '../components/ContentCard.astro'
import MainGridLayout from '../layouts/MainGridLayout.astro'
---

<MainGridLayout>
    <ContentCard 
        class="onload-animation" 
        style="animation-delay: var(--content-delay)"
    />
</MainGridLayout>

```

## 2.配置主页内容
新建文件`src/components/ContentCard.astro`

```js title="ContentCard.astro" {9} ins={1-8,10-16}
---
interface Props {
  class?: string
  style?: string
}

const { class: className, style } = Astro.props
---
//将主页内容至于此处，以下是示例：
<div class="card-base p-6 mb-4">

        <div class="card-base p-1 mb-0.1">
            <script is:inline></script>
            <div class="flex items-center gap-2"> </div>
            <h1 class="text-2xl font-bold text-black/90 dark:text-white/90">Welcome to my blog,👋</h1>
        </div>

```
:::important
**在此处引用`src/assets`里的图片需要在文件头加上：**
```js title="ContentCard.astro" ins={2-3,12}
---
import { Image } from 'astro:assets'
import ExampletImage from '../assets/images/example.png'

interface Props {
  class?: string
  style?: string
}
// ...existing code...

// 使用方式如下：
<Image src={BackImage} alt="示例图片" class="rounded-xl w-full mb-4"/>

// ...existing code...
```
:::

## 3.修改依赖文件路径

由于`src/pages/[...page].astro`被移至`/blog`目录，因此在import时需要再返回一级目录
```js title="src/pages/[...page].astro" ins={9-14} del={3-8}
---
import type { GetStaticPaths } from 'astro'
import ContentCard from '../components/ContentCard.astro'
import PostPage from '../components/PostPage.astro'
import Pagination from '../components/control/Pagination.astro'
import { PAGE_SIZE } from '../constants/constants'
import MainGridLayout from '../layouts/MainGridLayout.astro'
import { getSortedPosts } from '../utils/content-utils'
import ContentCard from '../../components/ContentCard.astro'
import PostPage from '../../components/PostPage.astro'
import Pagination from '../../components/control/Pagination.astro'
import { PAGE_SIZE } from '../../constants/constants'
import MainGridLayout from '../../layouts/MainGridLayout.astro'
import { getSortedPosts } from '../../utils/content-utils'
---
export const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts()
  // ...existing code...
```

## 4.在导航栏增加博客选项
在导航栏的`主页`后添加`博客`，并配置路径和i18n
```typescript title="src/config.ts" startLineNumber=41 ins={4}
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Blog,
    LinkPreset.Archive,
    LinkPreset.Series,
    LinkPreset.About,
    LinkPreset.Friends,
 
    // ...existing code...
```
<br/>

```js title="src/types/config.ts" startLineNumber=38 ins={3} "2" "3" "4" "5"
export enum LinkPreset {
  Home = 0,
  Blog = 1,
  Archive = 2,
  Series = 3,
  About = 4,
  Friends = 5,
}
// ...existing code...
```
<br/>

```js title="src/constants/link-presets.ts" startLineNumber=18 ins={9-12}
  [LinkPreset.Friends]: {
    name: i18n(I18nKey.friends),
    url: '/friends/',
  },
  [LinkPreset.Series]: {
    name: i18n(I18nKey.series),
    url: '/series/',
  },
  [LinkPreset.Blog]: {
    name: i18n(I18nKey.blog),
    url: '/blog/',
  },
}
```
<br/>

```js title="src/i18n/i18nKey.ts" startLineNumber=32 ins={6}
  author = 'author',
  publishedAt = 'publishedAt',
  license = 'license',
  friends = 'friends',
  series = 'series',
  blog = 'blog',
}
// ...existing code...
```
<br/>

```js title="src/i18n/languages/zh_CN.ts" startLineNumber=35 ins={6}
  [Key.author]: '作者',
  [Key.publishedAt]: '发布于',
  [Key.license]: '许可协议',
  [Key.friends]: '友链',
  [Key.series]: '系列',
  [Key.blog]: '博客',
}
```

## 5.修改控件指向路径

```js title="src/components/control/Pagination.astro" startLineNumber=47 ins={4-5} del={2-3} ins="blog/"
const getPageUrl = (p: number) => {
  if (p == 1) return '/'
  return `/${p}/`
  if (p == 1) return '/blog/'
  return `/blog/${p}/`
}
---
// ...existing code...
```
---
<br/>

# 结语
至此，访问博客根域名时就能直接看到主页啦ヾ(≧ ▽ ≦)ゝ，文章列表则位于`/blog/<页数>`🎉 

