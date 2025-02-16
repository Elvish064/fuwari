---
title: Markdown 示例  
published: 2023-10-01  
description: 一篇简单的 Markdown 博客示例  
tags: [Markdown, 博客, 演示]  
category: 示例  
series: 示例  
draft: false
pinned: true  
---

# 一级标题  

段落之间用空行分隔。  

第二段。*斜体*、**粗体** 和 `等宽字体`。无序列表如下：  

- 第一项  
- 第二项  
- 第三项  

注意实际文本内容从第 4 列开始（左侧空 4 字符）。  

> 块引用  
> 这样书写。  
>  
> 可以跨越多段落，  
> 按需使用。  

三个连字符 `---` 表示长破折号，两个连字符表示范围（例如“见第 12--14 章”）。三个点 `...` 转换为省略号。支持 Unicode 字符。☺  

## 二级标题  

有序列表示例：  

1. 第一项  
2. 第二项  
3. 第三项  

同样注意文本从第 4 列开始。代码示例如下：  

    # 重复操作...
    for i in 1 .. 10 { do-something(i) }  

代码需缩进 4 空格。也可用代码块语法：  

```  
define foobar() {  
    print "欢迎来到新世界！";  
}  
```  

（更易复制粘贴）。可为代码块添加语法高亮：  

```python  
import time  
# 快速数到十！  
for i in range(10):  
    # （但别太快）  
    time.sleep(0.5)  
    print(i)  
```  

### 三级标题  

嵌套列表示例：  

1. 第一步，准备材料：  
    - 胡萝卜  
    - 芹菜  
    - 扁豆  

2. 烧开水。  

3. 将所有材料倒入锅中，按以下步骤操作：  
        find wooden spoon  
        uncover pot  
        stir  
        cover pot  
        balance wooden spoon precariously on pot handle  
        wait 10 minutes  
        goto first step (or shut off burner when done)  

    注意别碰木勺，否则会掉落。  

文本始终对齐到 4 空格缩进（包括延续上一条目的文本）。  

链接示例：[外部网站](http://foo.bar)、[本地文档](local-doc.html)、[本文档的二级标题](#二级标题)。脚注示例[^1]。  

[^1]: 脚注内容写在此处。  

基础表格：  

尺寸 材质 颜色  
---  
9 皮革 棕色  
10 麻布 原色  
11 玻璃 透明  

表：鞋的尺寸与材质  

（上表为表格标题）多行表格示例：  

---  
关键词 描述  
---  
红色 夕阳、苹果及其他红色事物。  

绿色 树叶、青蛙及"生存不易"之物。  
---  

水平分割线如下：  

---  

定义列表示例：  

苹果  
: 适合做苹果酱。  

橙子  
: 柑橘类水果！  

番茄  
: 没有 "e" 的 tomato（英文拼写提示）。  

每项之间用空行分隔以增加可读性。  

行块示例：  

| 第一行  
| 第二行  
| 第三行  

图片插入方式：  

[//]: # (![示例图片]&#40;./demo-banner.png "示例图片"&#41;)  

行内数学公式：$\omega = d\phi / dt$。独立公式用双美元符号包裹：  

$$I = \int \rho R^{2} dV$$  

注意：可用反斜杠转义特殊符号，如 \`foo\`、\*bar\* 等。