---
title: "[Fuwari]适用的Markdown语法测试"
published: 2025-01-21
updated: 2025-01-21
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

// 数组去重<br>
const unique = (arr)=>{<br>
`-`	 return Array.from(new Set(arr))<br>
`+`  return [...new Set(arr)]<br>
}

---
### 2.键盘输入元素
<kbd>ctrl</kbd> +  <kbd>s</kbd>

`<kbd>ctrl</kbd> +  <kbd>s</kbd>`

---
### 3.字体颜色
<font color=red>红色</font><br>
<font color=blue>蓝色</font><br>
<font color=orange>橙色</font><br>
<font color=green>绿色</font><br>
<font color=purple>紫色</font><br>
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

![text](https://img.shields.io/badge/Genshin-luanch-blue)
- flat
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Markdown-Test.md&style=flat&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)
- flat-square
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Markdown-Test.md&style=flat-square&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)
- plastic
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Markdown-Test.md&style=plastic&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)
- for-the-badge
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Markdown-Test.md&style=for-the-badge&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)
- social
![GitHub last commit](https://img.shields.io/github/last-commit/Elvish064/fuwari?path=src%2Fcontent%2Fposts%2FFuwari-Markdown-Test.md&style=social&label=%E4%B8%8A%E6%AC%A1%E7%BC%96%E8%BE%91%E6%97%B6%E9%97%B4&labelColor=181E24&color=181E24)




