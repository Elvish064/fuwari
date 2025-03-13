---
title: "[Fuwari]在文末添加最后修改时间"
published: 2025-03-13
updated: 2025-03-13 13:47:00
description: "根据Astro docs介绍的方法实现"
image: ""
tags: [Fuwari,Blog]
category: Fuwari
series: Fuwari
draft: false
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
如果你的博客<font color=orange>**不是部署在自己的服务器**</font><br/>
而是部署在[Cloudflare](https://cloudflare.com)、[Vercel](https://vercel.app)等云托管平台（即每次构架都需要从你的Github仓库拉取文件）<br/>
则**无法利用插件自动获取文件修改时间**，请跳转至[4.1更改为获取手动填写的时间](#4.1)，更改为获取手动填写的文章编辑时间
:::

```js title="src/plugins/remark-modified-time.mjs" ins={1-9}
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
```js title="astro.config.mjs" ins={2}
...
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'
···
```

```js startLineNumber=75 ins={10}
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

## 4.显示最后修改时间

这里简单做了一个适配的ui组件，置于文章末尾，**时间为倒数**（即距离现在过去了多少时间）

```js title="src/pages/posts/[slug].astro" ins={2-3,12,29-31,120-194} collapse={4-10,14-26,34-119}
···
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { licenseConfig } from 'src/config'
import PostMetadata from '../../components/PostMeta.astro'
import ImageWrapper from '../../components/misc/ImageWrapper.astro'
import { profileConfig, siteConfig } from '../../config'
import { formatDateToYYYYMMDD } from '../../utils/date-utils'
import Comments from '@components/widget/Comments.svelte'


dayjs.extend(utc)

export async function getStaticPaths() {
  const blogEntries = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })
  return blogEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}

const { entry } = Astro.props
const { Content, headings } = await entry.render()

const { remarkPluginFrontmatter } = await entry.render()

const lastModified = dayjs(remarkPluginFrontmatter.lastModified)
  .utc()
  .format('YYYY-MM-DDTHH:mm:ss')


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: entry.data.title,
  description: entry.data.description || entry.data.title,
  keywords: entry.data.tags,
  author: {
    '@type': 'Person',
    name: profileConfig.name,
    url: Astro.site,
  },
  datePublished: formatDateToYYYYMMDD(entry.data.published),
  inLanguage: entry.data.lang
    ? entry.data.lang.replace('_', '-')
    : siteConfig.lang.replace('_', '-'),
  // TODO include cover image here
}
---
<MainGridLayout banner={entry.data.image} title={entry.data.title} description={entry.data.description} lang={entry.data.lang} setOGTypeArticle={true} headings={headings} series={entry.data.series}>
    <script is:inline slot="head" type="application/ld+json" set:html={JSON.stringify(jsonLd)}></script>
    <div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative mb-4">
        <div id="post-container" class:list={["card-base z-10 px-6 md:px-9 pt-6 pb-4 relative w-full ",
            {}
        ]}>
            <!-- word count and reading time -->
            <div class="flex flex-row text-black/30 dark:text-white/30 gap-5 mb-3 transition onload-animation">
                <div class="flex flex-row items-center">
                    <div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">
                        <Icon name="material-symbols:notes-rounded"></Icon>
                    </div>
                    <div class="text-sm">{remarkPluginFrontmatter.words} {" " + i18n(I18nKey.wordsCount)}</div>
                </div>
                <div class="flex flex-row items-center">
                    <div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">
                        <Icon name="material-symbols:schedule-outline-rounded"></Icon>
                    </div>
                    <div class="text-sm">{remarkPluginFrontmatter.minutes} {" " + i18n(I18nKey.minutesCount)}</div>
                </div>
            </div>

            <!-- title -->
            <div class="relative onload-animation">
                <div
                    data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title"
                    class="transition w-full block font-bold mb-3
                    text-3xl md:text-[2.25rem]/[2.75rem]
                    text-black/90 dark:text-white/90
                    md:before:w-1 before:h-5 before:rounded-md before:bg-[var(--primary)]
                    before:absolute before:top-[0.75rem] before:left-[-1.125rem]
                ">
                    {entry.data.title}
                </div>
            </div>

            <!-- metadata -->
            <div class="onload-animation">
                <PostMetadata
                        class="mb-5"
                        published={entry.data.published}
                        updated={entry.data.updated}
                        tags={entry.data.tags}
                        category={entry.data.category}
                ></PostMetadata>
                {!entry.data.image && <div class="border-[var(--line-divider)] border-dashed border-b-[1px] mb-5"></div>}
            </div>

            <!-- always show cover as long as it has one -->

            {entry.data.image &&
                <ImageWrapper id="post-cover" src={entry.data.image} basePath={path.join("content/posts/", getDir(entry.id))} class="mb-8 rounded-xl banner-container onload-animation"/>
            }


            <Markdown class="mb-6 markdown-content onload-animation">
                <Content />
            </Markdown>

            {licenseConfig.enable && <License title={entry.data.title} slug={entry.slug} pubDate={entry.data.published} class="mb-6 rounded-xl license-container onload-animation"></License>}

        </div>
    </div>

     <!---   
    <Comment post={entry}></Comment>
     -->

    <!-- 添加隐藏元素存储日期 -->
    <div id="last-modified" data-last-modified={lastModified} style="display: none;"></div>

    <div class="card-base p-6 mb-4">
        <script is:inline>
            function runtime() {
                // 从隐藏元素获取日期
                const lastModifiedElement = document.getElementById('last-modified');
                const startDate = new Date(lastModifiedElement.dataset.lastModified);
                const currentDate = new Date();
                const diff = currentDate - startDate;
        
                const seconds = Math.floor(diff / 1000);
                const days = Math.floor(seconds / 86400);
                const hours = Math.floor((seconds % 86400) / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
        
                const years = Math.floor(days / 365);
                const months = Math.floor((days % 365) / 30);
                const remainingDays = days % 30;
        
                let runtimeString = '距离上次编辑: ';
                if (years > 0) {
                    runtimeString += `${years}年`;
                }
                if (months > 0) {
                    runtimeString += `${months}月`;
                }
                if (remainingDays > 0) {
                    runtimeString += `${remainingDays}天`;
                }
                if (hours > -1) {
                    runtimeString += `${hours}小时`;
                }
                if (minutes > -1 && minutes < 10) {
                    runtimeString += `0${minutes}分`;
                }
                if (minutes > 9) {
                    runtimeString += `${minutes}分`;
                }
                if (secs > -1 && secs < 10) {
                    runtimeString += `0${secs}秒`;
                }
                if (secs > 9) {
                    runtimeString += `${secs}秒`;
                }
        
                document.getElementById("modifiedtime").innerHTML = runtimeString;
            }
            setInterval(runtime, 1000);
        </script>
        <div class="card-base p-1 mb-0.1">
            <script is:inline></script>
            <div class="flex items-center gap-2">
                <!-- 修正后的图标容器 -->
                <div class="transition h-9 w-9 rounded-lg overflow-hidden 
           bg-[var(--primary)] relative
           flex items-center justify-center mr-0">
    <!-- 半透明遮罩层 -->
    <div class="absolute inset-0 bg-white/70 dark:bg-black/70 rounded-md overflow-hidden"></div>
    <!-- 图标 -->
    <Icon name="material-symbols:history-rounded" 
          class="text-[1.35rem] text-[var(--primary)] relative z-10"/></div>
                <!-- 文字容器保持不变 -->
                <div class="flex flex-col gap-0.1">
                    <div id="modifiedtime" class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75"></div>
                    <p class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75">部分信息可能已经过时</p>
                </div>
            </div>
        </div>
        <!--  <p>{lastModified}</p>   -->
    </div>
···
```
<a name="4.1"></a>

#### 4.1更改为获取手动填写的时间
关于`[slug].astro`的修改，部署于托管平台的，此处需要改为获取文章头部数据中的updated时间

其余代码不变即可

手动填写时格式为：`updated: YYYY-MM-DD HH:mm:ss`
```js title="src/pages/posts/[slug].astro" startLineNumber=29 ins={2} del={1}
 const lastModified = dayjs(remarkPluginFrontmatter.lastModified)
 const lastModified = dayjs(entry.data.updated)
  .utc()
  .format('YYYY-MM-DDTHH:mm:ss')
```
<br/>

# 效果
每篇文章结尾都会显示最后修改时间啦😋

往下滑一点就能看到效果
