---
title: "[Fuwari]适用的Markdown Codeblock语法测试"
published: 2025-03-04
updated: 2025-03-04
description: "如题"
image: ""
tags: ["Fuwari"]
category: Fuwari
series: Fuwari
draft: false
---

# 1.代码文件名
```
```js title="demo.js"
function demo() {

}
```

<br/>

```js title="demo.js"
function demo() {

}
```
---
# 2.代码diff

```
```text {1, 5-6} ins={2-3} del={8}
第1行
第2行
第3行
第4行
第5行
第6行
第7行
第8行
```

<br/>

```text {1, 5-6} ins={2-3} del={8}
第1行
第2行
第3行
第4行
第5行
第6行
第7行
第8行
```

---
# 3.文本标记
```
```text "c c++" ins="csharp" del="ruby"
c c++ java
javascript python csharp
rust ruby golang
```
<br/>

```text "c c++" ins="csharp" del="ruby"
c c++ java
javascript python csharp
rust ruby golang
```
---
# 4.代码折叠
```
```csharp collapse={4-5, 6-8} title="Demo.cs"
public int Demo()
{
  var i = 1 + 1;

  //折叠区域
  //折叠区域
  //折叠区域

  return i;
}
```

<br/>

```csharp collapse={4-5, 6-8} title="Demo.cs"
public int Demo()
{
  var i = 1 + 1;

  //折叠区域
  //折叠区域
  //折叠区域

  return i;
}
```
---
# 5.起始行数
```
```text startLineNumber=5
第5行
第6行
```

<br/>

```text startLineNumber=5
第5行
第6行
```