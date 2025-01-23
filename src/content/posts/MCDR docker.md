---
title: "[Minecraft]基于MCDR docker镜像的Java1.20.1Fabric生电服务器搭建"
published: 2025-01-22
description: "如题"
image: "https://raw.githubusercontent.com/MCDReforged/MCDReforged/master/logo/images/logo_long.png"
tags: ["Minecraft"]
category: Minecraft
series: Minecraft
draft: false
lang: 'zh_CN'
---

> [MCDReforged](https://mcdreforged.com/zh-CN)<br>
> MCDaemon 的重置版本，用于控制 Minecraft 服务器的一个 Python 工具<br>
> TIS大佬力作，适合生电服务器使用<br>

::github{repo="MCDReforged/MCDReforged"}
---
## 搭建环境
- **适用于docker的系统**（Ubuntu、Debian、Windows WSL2 等）
- **已正确配置的docker 和 docker-compose**
- RAM ≥ 2GB
- 公网IPv4或IPv6，或自行配置内网穿透

### 演示环境：
>- Ubuntu 24.04
>- 4 核 CPU
>- 16GB RAM
>- 公网IPv4

---
## 创建容器

### 创建目录
``` Bash
$ mkdir mcdr 
$ cd mcdr
```
### 创建docker-compose配置文件
``` yml
services:
  mcdr:
    image: mcdreforged/mcdreforged-temurin:2.13.0-py3.11-slim-extra
    container_name: mcdr
    restart: unless-stopped
    ports:
      - "25565:25565"  # Minecraft 服务端口
    volumes:
      - ./mcdr:/mcdr
    environment:
      - TZ=Asia/Shanghai
```

:::note[Cover Source]
这里以 <u>mcdreforged-temurin:2.13.0-py3.11-slim-jdk17-extra</u> 镜像为例，该镜像包含了**OpenJDK17与Python3.11**
:::

>更多其他版本的镜像可以参考官方文档：[MCDReforged文档](https://docs.mcdreforged.com/zh-cn/latest/docker.html#extra-image)

运行`sudo docker-compose up -d` 创建容器，并查看日志`sudo docker logs mcdr`，它应该看起来是这样的：
<details markdown='1'><summary><u>展开/收起 控制台示例</u></summary>

``` Bash
$ sudo docker-compose up -d
[+] Running 2/2
 ✔ Network mcdr_default  Created                                                                        0.1s
 ✔ Container mcdr        Started    


$ sudo docker logs mcdr
MCDReforged 2.13.0 is starting up
MCDReforged is open source, u can find it here: https://github.com/MCDReforged/MCDReforged
[MCDR] [xx:xx:xx] [MainThread/INFO]: Language is set to en_us
[MCDR] [xx:xx:xx] [MainThread/INFO]: Encoding / Decoding method has set to utf8 / utf8
[MCDR] [xx:xx:xx] [MainThread/INFO]: Plugin directory list:
[MCDR] [xx:xx:xx] [MainThread/INFO]: - plugins
[MCDR] [xx:xx:xx] [MainThread/INFO]: Handler is set to vanilla_handler
[MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged 2.13.0 is starting
[MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged is running on Python 3.11.9 environment
[MCDR] [xx:xx:xx] [TaskExecutor/INFO]: Refreshing all plugins
[MCDR] [xx:xx:xx] [TaskExecutor/INFO]: No plugin has changed; Active plugin count: 2
[MCDR] [xx:xx:xx] [MainThread/INFO]: Starting the server with command 'echo Hello world from MCDReforged'
[MCDR] [xx:xx:xx] [MainThread/INFO]: Server is running at PID 11
[Server] Hello world from MCDReforged
[MCDR] [xx:xx:xx] [MainThread/INFO]: Server process stopped with code 0
[MCDR] [xx:xx:xx] [MainThread/INFO]: Server stopped
[MCDR] [xx:xx:xx] [MainThread/INFO]: Stopping MCDR
[MCDR] [xx:xx:xx] [MainThread/INFO]: bye
```

</details>


此时，mcdr的目录应该为这样:
``` Bash
mcdr/
 ├─ config/
 ├─ logs/
 │   └─ MCDR.log
 ├─ plugins/
 ├─ server/
 ├─ config.yml
 └─ permission.yml
```
---
## 配置服务器核心
### 如果你<font color=orange>已有</font>配置好的服务器文件
那么可以直接将**整个文件夹**放入`mcdr/server`文件夹即可，它看上去应该是这样的：
``` Bash
mcdr/server/
       ├─ config/
       ├─ mods
       ├─ world/
       ├─ .../
       ├─ fabric-server-launcher.properties
       ├─ fabric-server-launch.jar
       ├─ server.jar
       ├─ server.properties
       └─...
```
然后修改`mcdr/config.yml`，一般只需要修改以下两项：
``` yml
language: zh_cn
start_command: java -Xms1G -Xmx8G -jar fabric-server-launch.jar nogui
```
- `-Xms1G`:最小使用RAM<u>(根据实际情况调整)</u>
- `-Xmx8G`:最大使用RAM<u>(根据实际情况调整)</u>
- `fabric-server-launch.jar`: **服务器核心jar文件名**
- `nogui`:不显示GUI
  
> 更多配置项的详细信息可以参见官方文档：
> [MCDReforged文档](https://docs.mcdreforged.com/en/latest/configuration.html)

随后你可以直接跳转到[启动！](#启动)部分

---
### 如果你<font color=orange>没有</font>配置好的服务器文件

那么可以跟着如下步骤进行配置

**1.获取服务器核心**

在[Minecraft官网](https://www.minecraft.net/zh-hans/download/server)下载server.jar文件，	并放入`mcdr/server`文件夹

或者使用wget`sudo wget "https://piston-data.mojang.com/v1/objects/4707d00eb834b446575d89a61a11b5d548d8c001/server.jar" `

**2.修改参数**

返回`mcdr`目录修改`config.yml`
``` yml
start_command: java -Xms1G -Xmx8G -jar server.jar nogui
```
:::note
参数请**根据自身实际情况**进行调整
:::

随后返回容器根目录启动容器以执行启动命令`sudo docker-compose up -d`, 并查看日志`sudo docker logs mcdr `

<details markdown='1'><summary><u>展开/收起 控制台示例</u></summary>

``` Bash
$ sudo docker-compose up -d
[+] Running 2/2
 ✔ Network mcdr_default  Created                                                                        0.1s
 ✔ Container mcdr        Started                                                                        0.1s
$ sudo docker logs mcdr
MCDReforged 2.13.0 is starting up
MCDReforged is open source, u can find it here: https://github.com/MCDReforged/MCDReforged
[MCDR] [xx:xx:xx] [MainThread/INFO]: 语言已设置为 zh_cn
[MCDR] [xx:xx:xx] [MainThread/INFO]: 编码 / 解码方式已设置为 utf8 / utf8
[MCDR] [xx:xx:xx] [MainThread/INFO]: 插件文件夹列表:
[MCDR] [xx:xx:xx] [MainThread/INFO]: - plugins
[MCDR] [xx:xx:xx] [MainThread/INFO]: 解析处理器已设置为 vanilla_handler
[MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged 2.13.0 正在启动
[MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged 正于 Python 3.11.9 环境中运行
[MCDR] [xx:xx:xx] [TaskExecutor/INFO]: 刷新所有插件中
[MCDR] [xx:xx:xx] [TaskExecutor/INFO]: 没有插件变更; 已加载插件数: 2
[MCDR] [xx:xx:xx] [MainThread/INFO]: 正在启动服务端，启动参数为 'java -Xms1G -Xmx8G -jar server.jar nogui'
[MCDR] [xx:xx:xx] [MainThread/INFO]: 服务端正在以 PID 11 运行中
[Server] Starting net.minecraft.server.Main
[MCDR] [xx:xx:xx] [CheckUpdate/INFO]: 已检测到新版本: v2.13.2。v2.13.2 的新内容:
[MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     ## Fixes
[MCDR] [xx:xx:xx] [CheckUpdate/INFO]:
[MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     - Fixed catalogue meta fetch no retry if it fetches fails
[MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     - Make sure current directory is in the `sys.path` again (#277, #331)
WARNING: your terminal doesn't support cursor position requests (CPR).
[Server] [xx:xx:xx] [ServerMain/INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
[MCDR] [xx:xx:xx] [MainThread/INFO]: 服务端进程返回代码: 0
[MCDR] [xx:xx:xx] [MainThread/INFO]: 服务端已关闭
[MCDR] [xx:xx:xx] [MainThread/INFO]: 正在关闭 MCDR
[MCDR] [xx:xx:xx] [MainThread/INFO]: 正在关闭高级控制台
>
[MCDR] [xx:xx:xx] [MainThread/INFO]: bye
```
</details>

提示需要同意协议：`You need to agree to the EULA in order to run the server. Go to eula.txt for more info. `

进入`mcdr/server` 编辑`eula.txt` :`cd mcdr/server && sudo vim eula.txt `
``` txt 
eula=true
```
然后根据需要编辑`server.properties`
``` properties
#Minecraft server properties
#Thu Xxx xx xx:xx:xx CST 2024
# 一般只需要修改如下几项：
# 更多配置项，详见https://minecraft.fandom.com/zh/wiki/Server.properties


difficulty=hard               #游戏难度(peace|easy|normal|hard)
force-gamemode=true           #强制游戏模式
gamemode=survival             #默认游戏模式
level-seed=                   #生成世界种子，留空随机生成
max-players=20                #最大玩家数
motd=\u00A7b Elvish's \u00A7f Minecraft Server \n \u00A7e Welcome\!          #服务器介绍文字，根据自己修改（显示在服务器标题下方）颜色符号和换行需使用Unicode编码（颜色符号§：\u00A7；换行: \n；详见https://minecraft.fandom.com/zh/wiki/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81）
online-mode=true              #在线模式（true为仅正版玩家可进入；false为正版与离线玩家可进入）
simulation-distance=8         #模拟距离（单位：区块），根据自己服务器性能调整
view-distance=8               #视野距离（单位：区块）
white-list=true               #建议开启白名单
```
**3.配置fabric**

下载fabri核心，置于server.jar同级目录：`sudo wget  -O fabric-server-mc.1.20.1-loader.0.16.9-launcher.1.0.1.jar "https://meta.fabricmc.net/v2/versions/loader/1.20.1/0.16.9/1.0.1/server/jar" `

修改根目录下的`config.yml`，以启用fabric核心：
``` yml
start_command: java -Xms1G -Xmx8G -jar fabric-server-mc.1.20.1-loader.0.16.9-launcher.1.0.1.jar nogui
```
---
## 启动！
返回根目录，输入`sudo docker-compose up -d`以启动容器

<details markdown='1'><summary><u>展开/收起 控制台示例</u></summary>

``` Bash
$ sudo docker-compose up -d
[+] Running 1/0
 ✔ Container mcdr  Created                                                                              0.0s
$ sudo docker logs mcdr
mcdr  | MCDReforged 2.13.0 is starting up
mcdr  | MCDReforged is open source, u can find it here: https://github.com/MCDReforged/MCDReforged
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 语言已设置为 zh_cn
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 编码 / 解码方式已设置为 utf8 / utf8
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 插件文件夹列表:
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: - plugins
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 解析处理器已设置为 vanilla_handler
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged 2.13.0 正在启动
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: MCDReforged 正于 Python 3.11.9 环境中运行
mcdr  | [MCDR] [xx:xx:xx] [TaskExecutor/INFO]: 刷新所有插件中
mcdr  | [MCDR] [xx:xx:xx] [TaskExecutor/INFO]: 没有插件变更; 已加载插件数: 2
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 正在启动服务端，启动参数为 'java -Xms1G -Xmx8G -jar fabric-server-mc.1.21.4-loader.0.16.9-launcher.1.0.1.jar nogui'
mcdr  | [MCDR] [xx:xx:xx] [MainThread/INFO]: 服务端正在以 PID 11 运行中
mcdr  | [Server] Downloading Minecraft server
        mcdr  | [MCDR] [xx:xx:xx] [CheckUpdate/INFO]: 已检测到新版本: v2.13.2。v2.13.2 的新内容:
mcdr  | [MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     ## Fixes
mcdr  | [MCDR] [xx:xx:xx] [CheckUpdate/INFO]:
mcdr  | [MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     - Fixed catalogue meta fetch no retry if it fetches fails
mcdr  | [MCDR] [xx:xx:xx] [CheckUpdate/INFO]:     - Make sure current directory is in the `sys.path` again (#277, #331)
mcdr  | WARNING: your terminal doesn't support cursor position requests (CPR).
         mcdr  | [Server] Installing Fabric Loader 0.16.9(1.21.4) on the server
mcdr  | [Server] Downloading required files
mcdr  | [Server] Downloading library org.ow2.asm:asm:9.7.1
mcdr  | [Server] Downloading library org.ow2.asm:asm-analysis:9.7.1
mcdr  | [Server] Downloading library org.ow2.asm:asm-commons:9.7.1
mcdr  | [Server] Downloading library org.ow2.asm:asm-tree:9.7.1
mcdr  | [Server] Downloading library org.ow2.asm:asm-util:9.7.1
mcdr  | [Server] Downloading library net.fabricmc:sponge-mixin:0.15.4+mixin.0.8.7
mcdr  | [Server] Downloading library net.fabricmc:intermediary:1.21.4
mcdr  | [Server] Downloading library net.fabricmc:fabric-loader:0.16.9
mcdr  | [Server] Generating server launch JAR
mcdr  | [Server] Starting net.fabricmc.loader.impl.game.minecraft.BundlerClassPathCapture
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Loading Minecraft 1.21.4 with Fabric Loader 0.16.9
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Fabric is preparing JARs on first launch, this may take a few seconds...
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Loading 4 mods:
mcdr  | [Server]        - fabricloader 0.16.9
mcdr  | [Server]           \-- mixinextras 0.4.1
mcdr  | [Server]        - java 21
mcdr  | [Server]        - minecraft 1.21.4
mcdr  | [Server] [xx:xx:xx] [main/INFO]: SpongePowered MIXIN Subsystem Version=0.8.7 Source=file:/mcdr/server/libraries/net/fabricmc/sponge-mixin/0.15.4+mixin.0.8.7/sponge-mixin-0.15.4+mixin.0.8.7.jar Service=Knot/Fabric Env=SERVER
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Environment: Environment[sessionHost=https://sessionserver.mojang.com, servicesHost=https://api.minecraftservices.com, name=PROD]
mcdr  | [Server] [xx:xx:xx] [main/INFO]: No existing world data, creating new world
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Loaded 1370 recipes
mcdr  | [Server] [xx:xx:xx] [main/INFO]: Loaded 1481 advancements
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Starting minecraft server version 1.21.4
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Loading properties
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Default game type: SURVIVAL
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Generating keypair
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Starting Minecraft server on *:25565
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Using epoll channel type
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Preparing level "world"
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld
mcdr  | [Server] [xx:xx:xx] [Worker-Main-3/INFO]: Preparing spawn area: 2%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-2/INFO]: Preparing spawn area: 2%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-1/INFO]: Preparing spawn area: 2%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-3/INFO]: Preparing spawn area: 2%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-3/INFO]: Preparing spawn area: 18%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-2/INFO]: Preparing spawn area: 18%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-2/INFO]: Preparing spawn area: 51%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-1/INFO]: Preparing spawn area: 51%
mcdr  | [Server] [xx:xx:xx] [Worker-Main-1/INFO]: Preparing spawn area: 51%
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Time elapsed: xxxx ms
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Done (x.xxxs)! For help, type "help"
```
</details>

当出现`Done (x.xxxs)! For help, type "help" `时，就代表启动成功了。现在你可以进入游戏了

:::note
如果你的服务器有防火墙，请编辑安全组，开放25565端口
:::

玩家进入服务器显示的日志：
``` Bash
mcdr  | [Server] [xx:xx:xx] [User Authenticator #1/INFO]: UUID of player Elvish064 is xxxxxxxx-xxxx-xxxx-xxxxf-xxxxxxxxxx
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Elvish064[/xx.xx.xx.xx:xxxxxx] logged in with entity id 5 at (2.5, 125.0, 4.5)
mcdr  | [Server] [xx:xx:xx] [Server thread/INFO]: Elvish064 joined the game
```
---
## 控制台操作
使用`sudo docker attach mcdr`来连接到正在运行的mcdr控制台

> 有关MCDR控制台命令请参见[MCDReforged文档](https://docs.mcdreforged.com/zh-cn/latest/command/index.html) 

:::warn
此时如果使用`exit`退出，容器会**停止运行**！
:::

:::tip
如果想**退出容器但不想容器停止**，则按住<kbd>Ctrl</kbd>+<kbd>P</kbd>+<kbd>Q</kbd>退出
:::

---
至此，你已经成功的在mcdr docker里运行了Minecraft 1.20.1 fabric服务端！🎉

