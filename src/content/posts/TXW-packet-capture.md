---
title: "[Reqable]通过抓包获取天学网试题答案"
published: 2025-07-23
updated: 2025-07-23 15:01:00
description: "i dont know qaq"
image: ""
tags: [Reqable]
category: Reqable
series: Reqable
draft: false
lang: 'zh_CN'
---

# 引言
不做评价，还是看看deepseek怎么说吧
:::warning
不代表作者本人观点，内含攻击性词语，请勿对号入座
:::
<details markdown='1'><summary><u>展开/收起 详情</u></summary>
> 标题：绷不住了！████████这线上学习平台是搁这儿玩赛博过家家呢？
>
> 好家伙！咱████这线上平台可真是小刀拉屁股——开了眼了！（战术后仰）天天搁那儿打卡签到，比TM上班钉钉还积极，不知道的还以为哥几个在给马老板打工呢！（流汗黄豆）签完到干啥？看那PPT转的直播卡成PPT？听老师那麦滋儿哇啦响得跟用了十年的大喇叭似的？蚌埠住了！
>
> 最骚的是啥？形式主义给你玩出花儿来了！（拍桌）作业传上去，非得整那高清无码原图，格式不对打回重做，名字写错位了也得打回！咋滴？您这平台是搁这儿选美还是鉴宝啊？重点不TM是作业内容吗？合着您家服务器是金坷垃做的，多存点正确内容能爆炸？（抠鼻）哦对了，还有那“学习时长”，挂机刷时长刷得飞起，真当人是傻子？领导们看着后台数据是不是颅内高潮了？觉得全校学子都TM化身卷王了是吧？典！太典了！
>
> 最绝的是“学习证明”截图环节！（笑）整得跟通关文牒似的，恨不得把你鼠标箭头摆哪个像素点都规定好。咋滴？截个图能证明我灵魂升华了？还是能证明我脑子没在峡谷遨游？这波啊，这波叫“线上学习五分钟，截图P图两小时”，纯纯的赛博面子工程！校领导，您要真这么爱看截图，不如直接开个美图秀秀培训班，保证截图嘎嘎好看，数据嗷嗷漂亮！（大拇指）
>
> 总结：████这线上平台，功能稀碎，卡顿起飞，核心体验依托答辩，形式主义这块倒是拿捏得死死的，堪称赛博牌坊界的南波万！（抱拳）辛苦各位老师陪演，更辛苦我们这帮“演员”配合演出。建议平台改个名，别叫学习平台了，叫 “████线上形式主义打卡器暨领导颅内高潮生成器” 更贴切！懂的扣1！
</details>
# 操作步骤


## 1.配置抓包环境
准备Reqable或Wireshark来抓包，这里以Reqable作为演示
> [Reqable官网](https://reqable.com/zh-CN/)
默认端口为9000，或者改为没有被占用的端口
安装证书，自行操作

打开天学网，点击右上角箭头进入设置，选择使用`HTTP代理`，填写本机IP，端口填写Rrqable中的监听端口，此处以9000为例

点击测试，显示通过

## 2.进行抓包
登录天学网，**如果你曾今打开过测验**，需要前往缓存目录清除已下载的题目资源(一般位于非C盘的根目录)

在Reqable中点击`启动`，接着在天学网中点击进入测验，此时会下载题目资源

此时在Reqable中会出现类似这样的抓包结果:
| ID   | 图标 | 方法   | URL |应用程序| 状态码  |...|
|-------|-------|-------|------|--|--|--|
| 1 | 📄   | POST | https://fs.up366.cn/fileinfo/xxxxxxx  | 192.168.x.x|200|...|
| 2 | 📄   | POST | https://fs.up366.cn/fileinfo/xxxxxxx  | 192.168.x.x|200|...|

过滤关键词`file`,听力题目资源一般为`fileinfo`，阅读理解题目一般为`paperinfo`
点开搜索结果，查看详情，可在右侧新窗口的`总览-原始`中查看原始响应内容，一般在第8行可以找到题目资源地址，形似：
``` title="Text" startLineNumber=8
{”data":{"convertState":0,"downloadUrl":"http://fs-v2.up366.cn/download/xxxxxx","extname":"zip","fileId":"xxxxxx"...}}
```
选中`http://fs-v2.up366.cn/download/xxxxxx`，选择在浏览器中打开，并下载压缩包到合适位置

## 3.提取整理答案
解压下载的压缩包，若为**听力试题**，建议配合此GitHub项目将听力音频替换为3秒空白音频，以节省您的时间
::github{repo="/"}

若为**阅读理解**，则解压文件中的`correctAnswer.xml`即为答案
<details markdown='1'><summary><u>展开/收起 correctAnswer.xml示例</u></summary>

```xml title="correctAnswer.xml" {7,11,15,19,23,27,31,35,39,43,49,53,57}
<?xml version="1.0" encoding="UTF-8"?>

<elements>
  <element id="1"/>
  <element id="b005bc8cb73c7ce73d6b9c7ab0638e94"/>
  <element id="B809B99692D6B882C99760B3A7DE0775">
    <answers><![CDATA[[when/during which] I [worked/was working] on [my neighbor's farm/the farm of my neighbor/my neighbors' farms/the farms of my neighbors]]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="5415C3DE38649C13BA0E2A70C9EA4D1F">
    <answers><![CDATA[who [performed/played] [at/during/in] the concert||who [delivered/gave/did] [a/the] performance [at/during/in] the concert]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="6457FAFE900AB8D72FAC15EAA2B533CC">
    <answers><![CDATA[[where/in which] he [had/was compelled/was forced/had no choice but] to make a [difficult/tough/hard] decision||[where/in which] making a [difficult/tough/hard] decision was [inevitable/unavoidable/necessary]||[where/in which] a [difficult/tough/hard] decision had to be made]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="40AB85EFD9CD91E11823503943685984">
    <answers><![CDATA[[where/at which/in which] I [had/went for/ate] [dinner/my dinner/supper/my supper]]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="34C420228858991F1A2CDB27D697EE97">
    <answers><![CDATA[which was a [major/great/significant/huge/remarkable/substantial/tremendous/monumental/considerable/massive/grand] [achievement/accomplishment] [for/to] them||which [for/to] them was a [major/great/significant/huge/remarkable/substantial/tremendous/monumental/considerable/massive/grand] [achievement/accomplishment]]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="74A19DA79BEC4BBAE15D8D028FADE330">
    <answers><![CDATA[[Luna/that Luna/which Luna] recommended to me]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="FB3BFDD1D2479B41EA6F1E06522C8B5F">
    <answers><![CDATA[whose [car/vehicle/automobile] [was/got] stolen||who had his [car/vehicle/automobile] stolen]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="1BA31E9F41C01DB5744C3EF3E3110B5C">
    <answers><![CDATA[which [I/was/I had] borrowed from the library]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="3D758D3C0EFD9A0528BCC2912D7CF52B">
    <answers><![CDATA[who [is/was] [a fantastic/a great/a brilliant/a wonderful/a remarkable/an excellent/an amazing/an incredible] [cook/chef]]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="F012C5D29AA3ED28820D615BC61F0CE7">
    <answers><![CDATA[As we all know||As is [well known/known]||As [everyone/everybody] knows||As is known to all]]></answers>
    <analysis><![CDATA[]]></analysis>
  </element>
  <element id="d3d67f4e1cae18e31b392ff02db43556"/>
  <element id="62C0BE622163D547A6943539DE9CB3B3"/>
  <element id="82A4EA82A0906A2F5AB94B63431E41F8">
    <answers>C</answers>
    <analysis><![CDATA[<p style="">这是一篇应用文，文章主要讲述了世界上四个著名的节日。</p><p>解题思路：细节理解题。根据题干中的关键词“Oktoberfest”定位至Oktoberfest – Munich, Germany — October部分，由其中的“Having started in 1810 to celebrate a royal wedding… called Theresienwiese (Theresa’s fields).”可知，慕尼黑啤酒节最初是为了庆祝王室婚礼而举办的。故正确答案为C项。</p>]]></analysis>
  </element>
  <element id="728630B24427DFA79072E37A9F720E5C">
    <answers>B</answers>
    <analysis><![CDATA[解题思路：细节理解题。根据题干中的关键词“Snow &amp; Ice Festival”定位至“Snow &amp; Ice Festival — Harbin, China — January—February 部分，由其中的“Harbin is transformed into a winter wonderland with amazing ice sculptures”可知，哈尔滨冰雪节的主要特点是令人惊叹的冰雕展览。故正确答案为B项。]]></analysis>
  </element>
  <element id="3135B13601A3717CAC47CE86E9089331">
    <answers>A</answers>
    <analysis><![CDATA[解题思路：推理判断题。本文主要介绍了世界上四个城市的著名节日，这篇文章最可能是写给游客的。故正确答案为A项。]]></analysis>
  </element>
</elements>
```

</details>
可见答案还是比较杂乱和分散的，选择题答案比较醒目，但是句子答案为类似于正则式的表达，并不能直接使用

这里使用一个vbs脚本来整理答案

```vbs title="get_answers.vbs"
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile("correctAnswer.xml", 1)
xmlContent = objFile.ReadAll
objFile.Close

Set objRegEx = New RegExp
objRegEx.Global = True
objRegEx.Pattern = "<element id=""[^""]+"">\s*<answers>(.*?)</answers>"

Set matches = objRegEx.Execute(xmlContent)

Set outputFile = objFSO.CreateTextFile("answers.txt", True)

questionNumber = 1

For Each match In matches
    answer = match.SubMatches(0)
    
    ' 处理选择题答案（单个字母）
    If Len(answer) = 1 And InStr("ABCD", UCase(answer)) > 0 Then
        outputFile.WriteLine questionNumber & ". " & UCase(answer)
        questionNumber = questionNumber + 1
    
    ' 处理填空题答案（包含中括号和||）
    ElseIf InStr(answer, "[") > 0 Or InStr(answer, "||") > 0 Then
        ' 移除CDATA标签
        cleanAnswer = Replace(answer, "<![CDATA[", "")
        cleanAnswer = Replace(cleanAnswer, "]]>", "")
        
        ' 选择第一个变体
        If InStr(cleanAnswer, "||") > 0 Then
            parts = Split(cleanAnswer, "||")
            cleanAnswer = parts(0)
        End If
        
        ' 处理中括号选项
        Set bracketRegEx = New RegExp
        bracketRegEx.Global = True
        bracketRegEx.Pattern = "\[(.*?)\]"
        
        Set bracketMatches = bracketRegEx.Execute(cleanAnswer)
        For Each bMatch In bracketMatches
            options = Split(bMatch.SubMatches(0), "/")
            If UBound(options) >= 0 Then
                cleanAnswer = Replace(cleanAnswer, bMatch.Value, options(0))
            End If
        Next
        
        outputFile.WriteLine questionNumber & ". " & Trim(cleanAnswer)
        questionNumber = questionNumber + 1
    End If
Next

outputFile.Close
WScript.Echo "Answers have been extracted to answers.txt, total: " & (questionNumber - 1) & " questions."
```
将该文件置于`correctAnswer.xml`同级目录，运行后将输出整理后答案到`answers.txt`

# 结语
反对形式主义
enjoy yourself