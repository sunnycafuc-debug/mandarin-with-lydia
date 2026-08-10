import { defineConfig } from 'astro/config';
import { site } from './src/config.ts';

export default defineConfig({
  site: site.url,
  base: process.env.VERCEL ? '/' : '/mandarin-with-lydia/',
  output: 'static',
});
