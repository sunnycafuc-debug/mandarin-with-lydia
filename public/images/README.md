# 图片替换说明 / Replacing placeholder images

当前站点使用 SVG 占位图。上线前请把下面两张替换为真实照片：

- `hero-placeholder.svg` → 首页 Hero 区肖像（建议 480×520 或更大人像）
- `about-placeholder.svg` → 关于我区照片（建议 480×560 或更大人像）

替换方式二选一：

1. 直接覆盖同名文件（保留 `.svg` 扩展名或换成 `.jpg/.png`，如 `hero-photo.jpg`，然后修改 `src/components/Hero.astro` / `About.astro` 中的 `src` 路径）；或
2. 把真实照片命名为 `hero-placeholder.svg` / `about-placeholder.svg` 放入本目录覆盖即可（文件名需保持一致）。

OG 分享图：将 1200×630 的 `og-placeholder.png` 替换为你自己的品牌分享图（保持同名）。
