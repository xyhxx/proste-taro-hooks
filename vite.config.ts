/*
 * @Description:
 * @FilePath: /proste-taro-hooks/vite.config.ts
 */
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@proste-taro/hooks',
      fileName: format => `${format}/index.js`,
    },
    rollupOptions: {
      external: ['react', '@tarojs/taro', 'lodash', 'use-context-selector'],
      output: {
        globals: {
          react: 'react',
          '@tarojs/taro': '@tarojs/taro',
          lodash: 'lodash',
          'use-context-selector': 'use-context-selector',
        },
      },
    },
  },
});
