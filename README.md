# Mandarin With Lydia

Lydia 的中文教师个人独立站：现代简约、中英双语（Cookie 记忆语言偏好）、招生导向的单页滚动网站，外加一个「即将上线」的资源库页。

## 技术栈

- [Astro](https://astro.build)（静态站点生成器）
- 原生 CSS 变量设计系统，无 UI 框架
- 客户端双语切换：Cookie `lang=en|zh`，首次访问跟随浏览器语言

## 本地开发

```bash
npm install
npm run dev        # 开发服务器，默认 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
```

## 修改文案

- 品牌名 / 教师名 / 邮箱 / 社交链接：`src/config.ts`（全站一处替换）
- 英文文案：`src/i18n/en.ts`
- 中文文案：`src/i18n/zh.ts`
- 课程、价格、评价均为示例内容，上线前请替换为真实信息

## 替换图片

见 `public/images/README.md`。当前为 SVG 占位图（Hero 肖像、关于我照片、OG 分享图）。

## 部署到 Netlify

1. 把仓库推送到 GitHub，然后在 Netlify 选择 **Add new site → Import an existing project**。
2. 构建配置已写在 `netlify.toml`（`npm run build`，发布目录 `dist`），无需额外设置。
3. 联系表单使用 **Netlify Forms**：部署后进入 Netlify 后台 `Forms` 页面激活即可，无需代码改动。
4. 上线后把 `src/config.ts` 中的 `url` 改为真实域名。

## 资源库页

`src/pages/library.astro` 为预埋页，目前只展示「Coming Soon」占位。后续添加资料时，在 `src/i18n/*.ts` 的 `library.planned` 中新增条目，并把文件放入 `public/` 或 `src/assets/` 即可。

## 后续扩展方向（v1 未实现）

- 日历约课（可嵌入 Calendly）
- 在线付费（Stripe / PayPal）
- 独立 `/zh/` URL 与 sitemap，SEO 升级

## 当前线上状态

- 线上地址：https://sunnycafuc-debug.github.io/mandarin-with-lydia/ （GitHub Pages，`gh-pages` 分支自动部署）
- 每次要更新线上内容：`npm run build` 后把 `dist/` 提交到 `gh-pages` 分支（或配置 GitHub Actions 自动构建）。
- **注意**：GitHub Pages 环境下联系表单不可用（Netlify Forms 专属功能），表单会提示改用邮箱；上线正式版时请部署到 Netlify 并激活 Forms。
- 后续计划：购买 `mandarinwithlydia.com` → 部署到 Netlify（表单 + 自动部署 + 自定义域名），DNS 解析时把 `mandarinwithlydia.netlify.app` 或 GitHub Pages 的 CNAME 指过去即可。

## GitHub Pages 子路径说明

当前以 `/mandarin-with-lydia/` 子路径托管在 GitHub Pages（`astro.config.mjs` 中设置了 `base`）。
若以后部署到根域名（如 Netlify + `mandarinwithlydia.com`），需把 `astro.config.mjs` 里的 `base` 改为 `'/'` 再重新构建。
