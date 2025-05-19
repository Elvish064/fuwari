---
title: "[Pinned]Announcement/置顶公告/トップのお知らせ"
published: 2025-03-06 16:02:47
updated: 2025-03-06 16:02:47
description: "README"
image: "../../assets/images/announcement.png"
tags: ["Announcement"]
category: Announcement
draft: false
lang: 'zh_CN'
pinned: true
---
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

# 📌 Pinned Announcement  

## ⚠️ Browsing Tips  
1. **Display Recommendation**: For optimal layout, use a larger screen or adjust zoom level (≥100%) 💻  
2. **Access Optimization**: This site is hosted on Cloudflare Pages. Users in mainland China may experience slower speeds. A proxy is recommended for faster image loading 🚀  
3. **Mobile Adaptation**: The site is mobile-friendly, but complex layouts are better viewed in landscape mode 📱  

---  

## 📚 Site Resources  

### 1. Technical Framework & Resources  
#### 1.1 Blog Framework 🕸️  
- **Core Frameworks**:  
::github{repo="saicaca/fuwari"} 
https://astro.build/  
- **Customizations**: Adapted from the original framework's [PR](https://github.com/saicaca/fuwari/pulls) and modifications by the following bloggers (special thanks! 🙏):  
  - Added features: Post pinning, font optimization, comment system, blogroll module, Expressive Code highlighting, series navigation  
  - Bloggers' Homepage: 

https://blog.aulypc0x0.online/

https://ikamusume7.org/

#### 1.2 Deployment Service 💾  
- **Hosting Platform**: [Cloudflare Pages](https://pages.cloudflare.com/)

#### 1.3 Comment System 💬  
- Powered by Giscus (GitHub Discussions integration). A GitHub account is required to comment.  
- Official Project: [Giscuz](https://giscus.app/)



#### 1.4 Font Resources ❇️  
- **Primary Font**: Extracted from the game *Blue Archive*. Credits to the open-source project 🎮  
- Font Project: [vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive)

#### 1.5 Media Assets 🖼️  
- **Images**: Sourced from [Pixiv](https://pixiv.net/) / [X](https://x.com) (with original creator links)  
- **Videos**: Embedded from [Bilibili](https://bilibili.com) / [YouTube](https://youtube.com) (click to view original sources)  

---

### 2. Copyright & Privacy 🚧  
1. **Content Licensing**:  
   - Original articles are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Attribution is required for reuse. 📜  
   - Third-party media (images/videos) remain property of their creators. Proper attribution is provided.  
   - **Copyright Notice**: 
> - 如有侵权内容，请通过页面左侧或底部的邮件按钮联系我删除   
> - *If there is any infringement, please contact me for removal.*  
> - *権利侵害があれば、メールボタンからご連絡ください*    
   

2. **Privacy Policy**:  
   - **No personal data is collected** on this site. 🌐  
   - Comments via Giscus use GitHub authentication. Data is not shared with third parties. 🔒  
   - **No cookies** are used. Analytics are anonymized through Cloudflare. 📊  

---  

## ✍️ Content Guidelines  
1. **Writing Style**: Articles focus on technical tutorials, prioritizing utility over literary flair. 🤖  
2. **Content Timeliness**: Technical guides may become outdated. Check the "Last Updated" timestamp and verify by yourself. ⏳  
3. **Feedback & Corrections**:  
   - Found an error & bug? Submit fixes via **email** or comments. 🐛  
   - High-quality suggestions will be prioritized for updates. 💡  

---  

## 🌟 Support & Community  
1. **Community Channels**: Join our [QQ Group]() or [Telegram Group]() for discussions. 🌈  
2. **Support Us**: If this site helps you, share it with others who might benefit! 💖  

---  

## ⚖️ Disclaimer  
Content is provided for educational purposes only. We are not liable for any losses resulting from technical operations. Proceed with caution. ⚠️  

---  

## ✨ Thank you for reading! For inquiries, contact us via comments or email. 📬  

## 🕒 Changelog  
*(To be updated as needed)*  

---

  </div>
  
  <div id="zh-section" class="language-section">

<br/>  

# 📌 置顶公告  

## ⚠️ 浏览提示
1. **屏幕显示建议**：推荐使用较大屏幕或适当调整页面缩放比例（≥100%）以获得最佳浏览效果 💻  
2. **访问优化建议**：本站部署于 Cloudflare Pages，中国大陆地区访问可能较慢。建议通过代理加速访问，提升图片加载速度 🚀  
3. **移动端适配**：页面已针对移动端优化，但部分复杂布局仍建议使用横屏模式 📱  
---

## 📚 本站资源说明  

### 1. 技术框架与资源
#### 1.1 博客框架  🕸️
- 核心框架：  
::github{repo="saicaca/fuwari"} 
https://astro.build/ 
- **功能优化**：参考了原框架的[PR](https://github.com/saicaca/fuwari/pulls)及以下两位博主的改造方案，特别致谢 🙏  
  - 新增功能：文章置顶、字体美化、评论系统、友链模块、Expressive Code 代码高亮、系列文章导航  
  - 博主主页：  

https://blog.aulypc0x0.online/

https://ikamusume7.org/

#### 1.2 部署服务  💾
- 托管平台：[Cloudflare Pages](https://pages.cloudflare.com/) 

#### 1.3 评论系统 💬
- 使用了Giscuz支持的评论系统，需要登录GitHub账号以使用
- 项目官网：[Giscuz](https://giscus.app/)

#### 1.4 字体资源 ❇️ 
- 主字体：基于《Blue Archive》游戏提取的字体文件，感谢开源项目提供支持 🎮  
- 字体项目：[vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive)

#### 1.5 图片与视频 🖼️ 
- **图片来源**：[Pixiv](https://pixiv.net/) / [X](https://x.com)（附原作者发布链接）  
- **视频来源**：[Bilibili](https://bilibili.com) / [YouTube](https://youtube.com)（内嵌播放器可跳转原链接）  


### 2. 版权与隐私  🚧
1. **内容版权**：  
   - 本站原创文章默认采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议，转载需注明来源并禁止商用 📜  
   - 第三方资源（如图片/视频）版权归属原作者，本站仅作引用标注    
> - 如有侵权内容，请通过页面左侧或底部的邮件按钮联系我删除   
> - *If there is any infringement, please contact me for removal.*  
> - *権利侵害があれば、メールボタンからご連絡ください*  
   
1. **隐私保护**：
   - 本站**不收集任何与用户个人信息**  🌐
   - 评论系统Giscuz基于GitHub的discussion功能，不会向第三方共享数据 🔒  
   - 本站不使用任何 Cookie，访问统计通过 Cloudflare Analytics 匿名收集以供分析  📊

---


## ✍️ 文章相关说明  
1. **内容风格**：本站文章以技术分享为主，文风偏向实用而非文学性，望理解 🤖    
2. **内容时效性**：技术类文章可能存在更新延迟，实践前检查文章底部的"最后编辑时间"，并自行验证时效性 ⏳  
3. **纠错与反馈**：  
   - 发现错误？欢迎通过 **邮件** 或评论区提交反馈 🐛  
   - 优质建议将被优先纳入更新计划 💡  
---


## 🌟 支持与社区  
1. **交流社群**：加入我们的 [QQ 群组]() 或 [Telegram群组 ]() 来交流讨论 🌈  
2. **支持发展**：如果本站对你有帮助，也欢迎分享给身边需要的人~ 💖  

---

## ⚖️ 免责声明  
本站内容仅供学习参考，不对因使用教程导致的任何损失负责。技术操作请谨慎评估风险 ⚠️  

---

## ✨感谢您的阅读！如有问题，欢迎通过评论区或邮件交流 📬  


## 🕒 更新日志  
（原有内容保持不变）  

---

  </div>
  
  <div id="jp-section" class="language-section">
    
<br/>     

# 📌 固定告知  

## ⚠️ 閲覧時の注意  
1. **表示推奨環境**：最適なレイアウトのため、大画面またはズーム率100%以上での閲覧を推奨します 💻  
2. **アクセス最適化**：当サイトはCloudflare Pagesでホストされています。中国本土からのアクセスは遅延する可能性があります。プロキシ経由でのアクセスを推奨します 🚀  
3. **モバイル対応**：スマートフォン表示に対応していますが、複雑なレイアウトは横画面モードでの閲覧が適しています 📱  

---  

## 📚 サイトリソース  

### 1. 技術フレームワーク  
#### 1.1 ブログ基盤 🕸️  
- **コアフレームワーク**：  
::github{repo="saicaca/fuwari"} 
https://astro.build/ 
- **カスタマイズ**：原フレームワークの[PR](https://github.com/saicaca/fuwari/pulls)及び以下のブロガーの改造案を参考に機能追加（謝辞 🙏）：  
  - 追加機能：記事固定表示、フォント最適化、コメントシステム、相互リンクモジュール、Expressive Codeハイライト、シリーズ記事ナビゲーション  
  - ブロガープロフィール：  

https://blog.aulypc0x0.online/

https://ikamusume7.org/

#### 1.2 デプロイサービス 💾  
- **ホスティングプラットフォーム**：[Cloudflare Pages](https://pages.cloudflare.com/)   

#### 1.3 コメントシステム 💬  
- Giscus（GitHub Discussions連携）を採用。コメントにはGitHubアカウントが必要です。  
- 公式プロジェクト：[Giscuz](https://giscus.app/)

#### 1.4 フォントリソース ❇️  
- **メインフォント**：ゲーム『ブルーアーカイブ』から抽出。オープンソースプロジェクトに謝意 🎮  
- フォントプロジェクト：[vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive)

#### 1.5 メディア資産 🖼️  
- **画像出典**：[Pixiv](https://pixiv.net/) / [X](https://x.com)（原作者の公開リンクを付記）  
- **動画出典**：[Bilibili](https://bilibili.com) / [YouTube](https://youtube.com)（埋め込みプレーヤーで原ページへ遷移可能）  

---  

### 2. 著作権・プライバシー 🚧  
1. **コンテンツライセンス**：  
   - オリジナル記事は[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)ライセンスを採用。二次利用時は出典明記が必要です 📜  
   - 第三者メディア（画像/動画）の著作権は原作者に帰属します  
> - 如有侵权内容，请通过页面左侧或底部的邮件按钮联系我删除   
> - *If there is any infringement, please contact me for removal.*  
> - *権利侵害があれば、メールボタンからご連絡ください*  

2. **プライバシーポリシー**：  
   - 当サイトでは**個人情報を一切収集しません** 🌐  
   - GiscusコメントはGitHub認証を利用。第三者とのデータ共有は行いません 🔒  
   - **Cookie不使用**。アクセス解析はCloudflare Analyticsで匿名収集されます 📊  

---  

## ✍️ 記事に関する説明  
1. **執筆スタイル**：技術解説を中心に実用性を重視した構成です。文学的な表現は控えています 🤖  
2. **情報の鮮度**：技術記事の内容は陳腐化する可能性があります。「最終更新日」を確認の上、ご自身で検証ください ⏳  
3. **誤字修正要請**：  
   - 誤りを発見された場合は、**メール**/コメントでご連絡ください 🐛  
   - 有益なご提案は優先的に更新反映します 💡  

---  

## 🌟 サポート＆コミュニティ  
1. **交流グループ**：[LINEグループ]() または [Telegramグループ]() で情報交換できます 🌈  
2. **サイト支援**：当サイトがお役に立った場合は、必要な方々へシェアをお願いします 💖  

---  

## ⚖️ 免責事項  
当サイトのコンテンツは学習目的でのみ提供されます。技術操作に伴う損害について一切の責任を負いません。自己責任でご利用ください ⚠️  

---  

## ✨ ご覧いただきありがとうございます！お問い合わせはコメント欄またはメールで 📬  

## 🕒 更新履歴  
（必要に応じて追記）  
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