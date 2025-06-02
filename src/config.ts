import type {
  CommentConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Elvishの小窝',
  subtitle: 'Blog',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 275,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/banner.webp',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: '星空と少女-Stella',              // Credit text to be displayed
      url: 'https://www.pixiv.net/artworks/109301396'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Blog,
    LinkPreset.Series,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Friends,

    
    {
      name: 'GitHub',
      url: 'https://github.com/Elvish064',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpeg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Elvish',
  bio: '你好喵~',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:x-twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://x.com/Elvish064',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/Elvish064',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561199494359159/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Elvish064',
    },
    {
      name: 'Bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/1613372234',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const commentConfig: CommentConfig = {
  //disqus: {
  //  shortname: 'fuwari',
  //},
  // giscus: {
  //   repo: 'Elvish064/fuwari',
  //   repoId: 'R_kgDONjQjEA',
  //   category: 'Announcements',
  //   categoryId: 'DIC_kwDONjQjEM4Clmg1',
  //   mapping: 'pathname',
  //   strict: '0',
  //   reactionsEnabled: '1',
  //   emitMetadata: '0',
  //   inputPosition: 'top',
  //   theme: 'preferred_color_scheme',
  //   lang: 'zh-CN',
   //  loading: 'lazy',
  // },
  //twikoo: {
   // envId: 'https://elvish-twikoo.netlify.app/.netlify/functions/twikoo',
  //},
}