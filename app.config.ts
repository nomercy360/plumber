import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  ssr: true,
  server: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
    },
    rollupConfig: {
      external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks'],
    },
  },
});
