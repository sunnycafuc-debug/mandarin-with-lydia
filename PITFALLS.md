# 踩坑记录（Mandarin With Lydia 项目）

> 给 Lydia 的备忘。按类别整理，下次搭站/维护先查这里。

## 1. 域名（Dynadot）
- 买域名只能用**支付宝/微信**付款（美国银行卡不行）。
- **域名注册 ≠ 邮箱自动创建**：`hello@lydiamandarin.com` 要单独在 Dynadot 里建邮箱账号。
- 新域名 DNS 生效要时间（几小时到 24h+），「上个域名更快」只是运气，先做别的别干等。
- 家用路由器/本地 DNS 有缓存：打不开时先换网络或清 DNS 缓存再下结论。
- 邮箱测试报「找不到地址」= 域名 DNS 还没生效，不是邮箱没建好。

## 2. DNS 绑定（最容易踩的大坑：IP 选择）
- Vercel 新版默认 IP `216.198.79.1` **国内被墙**，域名在国内打不开。
- 国内可直连的正确配置：
  - 根域 A 记录：`76.76.21.21`
  - www CNAME：`cname.vercel-dns.com`
  - 根域会自动 308 跳转到 www。
- **别**把 A 记录改成 GitHub Pages 的 `185.199.111.153`：域名绑 GitHub Pages 会报证书不匹配（证书是 github.io 的），且国内访问差。

## 3. 部署平台
- 自定义域名 + 国内访问：**优先 Vercel**。这次一开始走 GitHub Pages 绕了远路（上一个 yunlistudio 网站就是 Vercel，该早点想到）。
- GitHub Pages 绑自定义域名：证书对不上，放弃。
- Vercel 显示「Git Connected」可能是假象：GitHub 上 webhook 列表是空的 → push 不自动部署。
  - 兜底：用 **Vercel Deploy Hook**（Settings → Git → Deploy Hooks）手动触发：
    `curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_.../..."`
  - 部署后要 curl 线上页面确认真的更新（搜新标记，如 `formsubmit.co`、`data-contact-form`）。
- Astro `base` 路径：GitHub Pages 用 subpath，Vercel 用根路径；换平台记得改。

## 4. 表单与邮箱
- **Netlify Forms 只对 Netlify 部署生效**；网站搬到 Vercel 后表单会静默失败。
- 改用 **FormSubmit**：免费、零注册、国内可直连。
- web3forms 国内被墙（403）；Formspree 可用但要注册 → 优先 FormSubmit。
- FormSubmit **首次使用必须激活**：会给收件邮箱发一封 "Activate Form" 邮件，点链接后才会转发（激活前提交会被拦截）。
- FormSubmit AJAX 端点直接 curl 报 "open this page through a web server"：要带 `Origin` / `Referer` 头模拟真实网页。
- 换邮箱只需把 `form action` 和 AJAX URL 里的 `hello@lydiamandarin.com` 一起改，并重新走一次激活流程。

## 5. 网络/代理
- Lydia 靠 ccswitch 连 DeepSeek 登录 Codex：**不要建议她关 ccswitch**。
- GitHub 有时需要 VPN；Vercel 域名（正确 IP 配置下）**不需要 VPN**，国内直连。
- git push 直连可用，不要开代理。

## 6. 开发环境（Codex）
- **第三方 skill/脚本安装前必须逐行审查代码**（2026-08-12，Lydia 要求，例：claude-vision-skill）：安装前先通读全部代码，核对网络请求去向（只应发往配置的 API）、子进程/系统命令调用、剪贴板与文件读取、是否存在后门/遥测/诱导指令；涉及上传图片、读剪贴板、存放 API Key 的风险要明确告知 Lydia 后再装；日后升级前先看 diff 再更新。
- Codex 沙盒默认只读：写文件 / 构建 / push / 网络都要请求升级权限。
- 构建命令：
  `/Users/lydia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/astro/astro.js build`

## 上线验收清单（每次必做）
- [ ] 线上 HTML 搜关键标记，确认部署真的更新了
- [ ] 邮箱 SMTP 测试 250 ok
- [ ] 表单发一条测试提交，确认能收到
- [ ] 国内网络 + 无 VPN 打开域名正常
- [ ] 移动端 375px 无横向溢出
- [ ] EN / 中文切换，刷新后偏好保留
