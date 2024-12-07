---
title: Statsify Finance 技术解析
date: 2024-11-21 08:00:00
cover_image: /img/000035.png
cover_image_alt: Statsify Finance 的截图
categories: 文章
lang: zh-CN
tags:
  - 网站
  - 技术
---

![Statsify Finance 的截图](/img/000035.png)

Statsify Finance 是一个面向初学者和专业人士的金融工具网站。

# 页面说明

网站包含多个具有不同功能的页面:

1. **/analysis 分析页面**
   - **/analysis/qualitative**
     - 该页面提供定性经济概念的全面概述，包括每个概念的详细解释和相关案例研究。
   - **/analysis/quantitative**
     - 该页面深入探讨定量经济概念，配有详尽的解释和说明性案例研究。
2. **/strategy 策略页面**
   - **/strategy/trade**
     - 该页面展示各种交易策略，并附有说明其应用的深入案例研究。
   - **/strategy/investor?index=n**
     - 该页面详细介绍了各种投资者档案，帮助用户理解不同的投资方法。
   - **/strategy/risk-manage**
     - 该页面讨论广泛使用的风险控制方法，并附有对不同行业进行分类的图形分析。
3. **/articles 文章页面**
   - 该页面收集了讨论该领域近期事件和趋势的经济文章。
4. **/search 搜索页面**
   - 该页面允许用户搜索网站上的任何信息，包括文章、概念等。
5. **/finance-terms 金融术语页面**
   - 该页面作为金融术语词汇表，为每个术语提供清晰的定义和解释。

# 使用的技术栈

- **Next.js**
- **Tailwind CSS**
- **Antd UI**
- **Echarts**
- **@wangeditor/editor**
- **Mongodb**
- **Next Auth**
- **Swiper**
- **Typescript**

该网站以 Next.js 和 Tailwind CSS 为基础框架，使用 Antd UI 组件。内容管理系统基于 next.js API 路由和 mongodb 数据存储。

**项目结构**

```
StatsifyFinance
├── LICENSE
├── README.md
├── app # Next.js 应用
│   ├── Providers.js # NextAuth 会话提供者
│   ├── admin # 管理页面 (Antd UI)
│   │   ├── (admin-layout)
│   │   │   ├── analysis
│   │   │   │   └── page.tsx
│   │   │   ├── analysis-category
│   │   │   │   └── page.tsx
│   │   │   ├── articles
│   │   │   │   └── page.tsx
│   │   │   ├── articles-category
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   ├── finance-terms
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── strategy
│   │   │   │   ├── investor
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── risk-manage
│   │   │   │   │   └── page.tsx
│   │   │   │   └── trade
│   │   │   │       └── page.tsx
│   │   │   └── users
│   │   │       └── page.tsx
│   │   ├── _components
│   │   │   ├── antd-admin.tsx
│   │   │   ├── antd-container.tsx
│   │   │   ├── my-editor.tsx
│   │   │   ├── my-upload.tsx
│   │   │   └── page-container.tsx
│   │   └── layout.tsx
│   ├── analysis
│   │   ├── page.tsx
│   │   ├── qualitative
│   │   │   └── page.tsx
│   │   └── quantitative
│   │       └── page.tsx
│   ├── api # Next.js API 路由
│   │   ├── admin
│   │   │   ├── articles # Admin 文章 API 路由
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── category # Admin 分类 API 路由
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── finance-terms # Admin 金融术语 API 路由
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── learn # Admin 学习 API 路由
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── users # Admin 用户 API 路由
│   │   │       ├── [id]
│   │   │       │   └── route.ts
│   │   │       └── route.ts
│   │   ├── auth # NextAuth 认证 API 路由
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── common # 通用 API 路由
│   │   │   ├── upload
│   │   │   │   └── route.ts
│   │   │   └── wang_editor # WangEditor API 路由
│   │   │       └── upload
│   │   │           └── route.ts
│   │   └── register # 注册 API 路由
│   │       └── route.ts
│   ├── articles # 文章页面
│   │   ├── details
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── auth.ts # NextAuth 认证
│   ├── favicon.ico
│   ├── finance-terms
│   │   └── page.tsx
│   ├── globals.css # 全局样式
│   ├── layout.tsx # 布局组件
│   ├── login
│   │   └── page.tsx
│   ├── page.tsx # 主页
│   ├── register
│   │   └── page.tsx
│   ├── search
│   │   └── page.tsx
│   └── strategy
│       ├── investor
│       │   └── page.tsx
│       ├── risk-manage
│       │   ├── industry-sectors
│       │   │   └── page.tsx
│       │   └── page.tsx
│       └── trade
│           └── page.tsx
├── components
│   ├── echarts.tsx # Echarts 组件
│   ├── finance-terms-slider.tsx
│   ├── footer.tsx
│   ├── investor-slider.tsx
│   ├── learn-slider.tsx
│   ├── main-nav.tsx
│   ├── menu.tsx
│   ├── message.tsx
│   ├── news-slider.tsx
│   ├── side-nav.tsx
│   ├── str2html.tsx # 字符串转 html 组件
│   ├── topbar.tsx
│   └── user.tsx
├── libs
│   └── mongodb.ts # MongoDB 数据库连接
├── middleware.ts # 认证中间件
├── models # MongoDB 模型
│   ├── articles.ts
│   ├── category.ts
│   ├── finance-terms.ts
│   ├── learn.ts
│   └── user.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── uploads
├── src # Website sources
│   ├── css
│   │   ├── finance-terms.module.css
│   │   ├── footer.module.css
│   │   ├── investor.module.css
│   │   ├── learn.module.css
│   │   ├── main-nav.module.css
│   │   ├── menu.module.css
│   │   ├── news.module.css
│   │   ├── search.module.css
│   │   └── side-nav.module.css
│   └── data
│       ├── analysis
│       │   ├── mainNav.ts
│       │   ├── qualitative.ts
│       │   └── quantitative.ts
│       └── strategy
│           ├── mainNav.ts
│           └── rishMng.ts
├── tailwind.config.ts # Tailwind CSS 配置
└── tsconfig.json # Typescript 配置
```
