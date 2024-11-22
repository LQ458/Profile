---
title: Statsify Finance Tech Explained
date: 2024-11-21 08:00:00
cover_image: /img/000035.png
cover_image_alt: A screen shot of Statsify Finance
categories: Essay
tags:
  - website
  - tech
---

![A screen shot of Statsify Finance](/img/000035.png)

Statsify Finance is a finance tool website for both beginners and professionals.

# Pages Explanation

There are several pages with various functions in the website:

1. **/analysis page**
    - **/analysis/qualitative**
        - This page provides a comprehensive overview of qualitative economic concepts, featuring detailed explanations and relevant case studies for each concept.
    - **/analysis/quantitative**
        - This page offers an in-depth exploration of quantitative economic concepts, complete with thorough explanations and illustrative case studies.
2. **/strategy page**
    - **/strategy/trade**
        - This page presents various trading strategies, accompanied by insightful case studies to illustrate their application.
    - **/strategy/investor?index=n**
        - This page details a range of investor profiles, helping users understand different investment approaches.
    - **/strategy/risk-manage**
        - This page discusses widely-used risk control methods, along with graphical analyses that classify different industries.
3. **/articles page**
    - This page features a collection of economic articles that discuss recent events and trends in the field.
4. **/search page**
    - This page allows users to search for any information available on the website, including articles, concepts, and more.
5. **/finance-terms page**
    - This page serves as a glossary of finance terms, providing clear definitions and explanations for each term.

# Tech Stack Used

- **Next.js**
- **Tailwind CSS**
- **Antd UI**
- **Echarts**
- **@wangeditor/editor**
- **Mongodb**
- **Next Auth**
- **Swiper**
- **Typescript**

The website itself is built with Next.js and Tailwind CSS with Antd UI components as the basic framework. The content management system is based on the next.js API routes + the mongodb for data storage.

**Project Structure**
```
StatsifyFinance
├── LICENSE
├── README.md
├── app # Next.js app
│   ├── Providers.js # NextAuth Session Provider
│   ├── admin # Admin pages (Antd UI)
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
│   ├── api # Next.js API routes
│   │   ├── admin
│   │   │   ├── articles # Admin articles API routes
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── category # Admin category API routes
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── finance-terms # Admin finance terms API routes
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── learn # Admin learn API routes
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── users # Admin users API routes
│   │   │       ├── [id]
│   │   │       │   └── route.ts
│   │   │       └── route.ts
│   │   ├── auth # NextAuth authentication API routes
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── common # Common API routes
│   │   │   ├── upload
│   │   │   │   └── route.ts
│   │   │   └── wang_editor # WangEditor API routes
│   │   │       └── upload
│   │   │           └── route.ts
│   │   └── register # Register API route
│   │       └── route.ts
│   ├── articles # Articles pages
│   │   ├── details
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── auth.ts # NextAuth authentication
│   ├── favicon.ico
│   ├── finance-terms
│   │   └── page.tsx
│   ├── globals.css # Global styles
│   ├── layout.tsx # Layout component
│   ├── login
│   │   └── page.tsx
│   ├── page.tsx # Home page
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
│   ├── echarts.tsx # Echarts component
│   ├── finance-terms-slider.tsx
│   ├── footer.tsx
│   ├── investor-slider.tsx
│   ├── learn-slider.tsx
│   ├── main-nav.tsx
│   ├── menu.tsx
│   ├── message.tsx
│   ├── news-slider.tsx
│   ├── side-nav.tsx
│   ├── str2html.tsx # String to html component
│   ├── topbar.tsx
│   └── user.tsx
├── libs
│   └── mongodb.ts # MongoDB database connection
├── middleware.ts # Middleware for authentication
├── models # MongoDB models
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
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # Typescript configuration
```