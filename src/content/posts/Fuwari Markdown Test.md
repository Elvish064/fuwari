---
title: 适用于Fuwari的Markdown语法测试
published: 2025-01-21
description: "如题"
image: ""
tags: ["Fuwari"]
category: Fuwari
series: Fuwari
draft: false
---

### 1.代码diff
``` diff
// 数组去重
const unique = (arr)=>{
-    return Array.from(new Set(arr))
+    return [...new Set(arr)]
}
```

// 数组去重

const unique = (arr)=>{

`-`	 return Array.from(new Set(arr))

`+`  return [...new Set(arr)]

}

---
### 2.键盘输入元素
<kbd>ctrl</kbd> +  <kbd>s</kbd>

`<kbd>ctrl</kbd> +  <kbd>s</kbd>`

---
### 3.字体颜色
<font color=red>红色</font>
<font color=blue>蓝色</font>
<font color=orange>橙色</font>
<font color=green>绿色</font>
<font color=purple>紫色</font>
<mark>高亮</mark> 
```

<font color=red>红色</font>
<font color=blue>蓝色</font>
<font color=orange>橙色</font>
<font color=green>绿色</font>
<font color=purple>紫色</font>
<mark>高亮</mark> 
```
---
### 4.脚注
脚注1[^1] 脚注2[^a]

[^1]: 这里是脚注 1 的解释

[^a]: 这里是脚注 2 的解释
```
脚注1[^1] 脚注2[^a]

[^1]: 这里是脚注 1 的解释

[^a]: 这里是脚注 2 的解释
```
---
### 5.shields徽章
`![text](https://img.shields.io/badge/any_text-you_like-blue)`
![text](https://img.shields.io/badge/any_text-you_like-blue)

![text](https://img.shields.io/badge/Genshin-luanch)

![Static Badge](https://img.shields.io/badge/:badgeContent)
