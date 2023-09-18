import { fileURLToPath, URL } from 'node:url'
       
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      extensions: ['vue'],
      dirs: ['src/components', 'src/containers', 'src/modules'],
      dts: true
    }),
    AutoImport({
      imports: [
        'pinia',
        '@vueuse/head',
        'vue',
        'vue-router',
        'vitest'
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
