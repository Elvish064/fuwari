---
title: "[Fuwari]简易的单页面伪i18n实现"
published: 2025-03-08
updated: 2025-03-08
description: "基于Markdown渲染的HTML"
image: ""
tags: [Fuwari,Blog]
category: Fuwari
series: Fuwari
draft: false
lang: 'zh_CN'
---

# 问题
 原本Fuwari基于的Astro是有[i18n](https://docs.astro.build/zh-cn/recipes/i18n/)功能的
 
 但是似乎Fuwari的作者并没有打算适配i18n[^1]

 [^1]:https://github.com/saicaca/fuwari/issues/145

# 方案

 不过还好Markdonwn可以解析一些简单的html代码
 
 那么，好吧，就三种语言三个按钮就行了。简单做了淡入淡出动画，默认显示英文。

 ```md {60,70,79} title="markdown" 

<style>
.language-container {
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}

.language-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;  /* 使用visibility替代display */
  pointer-events: none;  /* 禁用未激活内容的交互 */
}

.language-section.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
  visibility: visible;
  pointer-events: auto;
}
</style>

<div class="flex items-center justify-center gap-4">
  <a href="#en" onclick="switchLanguage('en')" class="font-bold overflow-hidden active:scale-95">
    <div class="btn-card max-w-fit rounded-md h-[2.75rem] px-4 flex items-center justify-start gap-2 bg-black/5 dark:bg-white/10">
      <div class="overflow-hidden transition overflow-ellipsis whitespace-nowrap text-[var(--primary)]/75 dark:text-[var(--primary)]/75">
        English
      </div>
    </div>
  </a>
  <div class="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
  <a href="#zh" onclick="switchLanguage('zh')" class="font-bold overflow-hidden active:scale-95">
    <div class="btn-card max-w-fit rounded-md h-[2.75rem] px-4 flex items-center justify-start gap-2 bg-black/5 dark:bg-white/10">
      <div class="overflow-hidden transition overflow-ellipsis whitespace-nowrap text-[var(--primary)]/75 dark:text-[var(--primary)]/75">
        中文
      </div>
    </div>
  </a>
  <div class="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
  <a href="#jp" onclick="switchLanguage('jp')" class="font-bold overflow-hidden active:scale-95">
    <div class="btn-card max-w-fit rounded-md h-[2.75rem] px-4 flex items-center justify-start gap-2 bg-black/5 dark:bg-white/10">
      <div class="overflow-hidden transition overflow-ellipsis whitespace-nowrap text-[var(--primary)]/75 dark:text-[var(--primary)]/75">
        日本語
      </div>
    </div>
  </a>
</div>

<div class="language-container show-en">
  <div id="en-section" class="language-section active">

<br/> 

# English content
---


  </div>
  
  <div id="zh-section" class="language-section">

<br/> 

# 中文内容
---

  </div>
  
  <div id="jp-section" class="language-section">
    
<br/>  

# 日本のコンテンツ
---
  </div>
</div>



<script>
function switchLanguage(lang) {
    const container = document.querySelector('.language-container');
    const sections = container.querySelectorAll('.language-section');
    const newActive = document.getElementById(`${lang}-section`);
    
    if (!newActive) return;

    // 获取当前激活的部分
    const currentActive = container.querySelector('.language-section.active');
    
    if (currentActive) {
        // 淡出当前内容
        currentActive.style.opacity = '0';
        currentActive.style.transform = 'translateY(20px)';
        
        // 等待淡出动画完成后再切换
        setTimeout(() => {
            currentActive.classList.remove('active');
            
            // 准备新内容
            newActive.style.opacity = '0';
            newActive.style.transform = 'translateY(20px)';
            newActive.classList.add('active');
            
            // 触发重排以启动动画
            void newActive.offsetWidth;
            
            // 淡入新内容
            newActive.style.opacity = '1';
            newActive.style.transform = 'translateY(0)';
            
            // 调整容器高度
            container.style.height = `${newActive.scrollHeight}px`;
            
            setTimeout(() => {
                container.style.height = 'auto';
            }, 300);
        }, 300);
    } else {
        // 首次加载直接显示
        newActive.classList.add('active');
        newActive.style.opacity = '1';
        newActive.style.transform = 'translateY(0)';
    }
}

// 页面加载时默认显示英文
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('en');
});
</script>
 ```

:::note
这段代码仅在Fuwari框架中测试能正常渲染，置于别处可能无法正确渲染
:::
# 效果

效果可以参考我的 [关于](https://elvish.me/about/)