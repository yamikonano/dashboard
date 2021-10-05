import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import ViteComponents, {AntDesignVueResolver} from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')

      },
      '/fig':{
        target: 'https://headlesschrome-1.f7mtcrmb1scva.ap-southeast-1.cs.amazonlightsail.com',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/fig/, '')

      }
    }
  },
  base: './',
  plugins: [vue(),
    svgLoader({
      svgoConfig: {
        multipass: true
      }
    }),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    })],
  resolve: {
    alias: [
      {find: '@', replacement: '/src'},
    ]
  },

})
