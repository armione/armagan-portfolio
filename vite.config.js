import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caseStudy: resolve(__dirname, 'case-study.html'),
        tabelaShowcase: resolve(__dirname, 'tabela-showcase.html'),
        tabelaPrivacy: resolve(__dirname, 'tabela-privacy.html'),
        tabelaLogotype: resolve(__dirname, 'tabela-logotype-motion.html'),
        behanceExport: resolve(__dirname, 'behance-export.html'),
      },
    },
  },
});
