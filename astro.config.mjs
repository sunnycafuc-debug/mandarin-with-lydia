import { defineConfig } from 'astro/config';
import { site } from './src/config.ts';

export default defineConfig({
  site: site.url,
  base: '/mandarin-with-lydia/',
  output: 'static',
});
