---
title: "[Fuwari]使用Shields Badges为博客添加最后编辑时间"
published: 2025-01-27
updated: 2025-01-27
description: "仅适用于托管于Github的Fuwari"
image: "https://shields.io/img/logo.png"
tags: [Fuwari,Blog]
category: Fuwari
series: Fuwari
draft: false
lang: 'zh_CN'
---

## 引入
就目前而言Fuwari还没有**文章最后编辑时间**的显示<br>
虽然文章标题下方有关于__上次修改时间__的显示，但是不太醒目且需要手动更改<br>
由于Fuwari是基于Astro编写的，后尝试按照[Astro官方文档](https://docs.astro.build/zh-cn/recipes/modified-time/)进行修改，未成功<br>
最后想到了[Shields徽章](https://shields.io)可以获取Github Last Commit时间：
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari)

---
## 配置
打开(https://shields.io/badges/git-hub-last-commit)，可以根据引导填写参数
:::tip
> - `user`:自己的用户名
> - `repo`:Fuwari的仓库名称
> - `path`:指向当前这个页面的md文件，一般位于`src/content/posts/*.md`
> - `style`:不同风格的Badges在Fuwari上渲染的样式不太相同，示例参见[\[Fuwari\]适用的Markdown语法测试](https://elvish.me/posts/fuwari-markdown-test/)
> - `label`:Badge左侧显示的文字，如`上次编辑时间`
> - `labelColor`:Badge左侧底色，这里使用Fuwari暗色背景底色`181E24`
> - `color`:Badge右侧底色，这里使用Fuwari暗色背景底色`181E24`
> - `link`:点击Badge跳转的链接，这里留空
:::
最后划到页面下端，选择`Markdown`，点击下方生成的链接以复制<br>
点击`Execute`可以看到示例（前提是你的repo中已有对应的md文件，否则会显示报错）

---
## 嵌入Fuwari
这里我选择放入Important的Admonitions，并添加提示文字，置于文章结尾<br>
示例：
``` Markdowns
:::important
![GitHub last commit](https://img.shields.io/github/last-commit/user/repo?path=...)
部分信息可能已经过时
:::
```


如果配置正确，那么将看到如下的效果↓：

---

:::important
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Last-Modified-Time.md&style=for-the-badge&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)部分信息可能已经过时
:::