import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const pathResolve = (dir) => resolve(__dirname, dir)


export default defineConfig({
  plugins: [vue(),
  createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [resolve(process.cwd(), './src/assets/svg/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[name]',
  })],
  build: {
    outDir: 'dist',     // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
  },
  base: './', // 设置公共基础路径
  server: {
    host: 'localhost',
    port: 8000,
    proxy: {
      "/auth": {
        target: "http://192.168.3.205"
      }
    }
  },
})
