import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/views',
      exclude: ['**/components/**/*.(vue|jsx)'],
      extensions: ['.vue', '.jsx'],
      getRouteName (node){
        return node.value.rawSegment
      },
    }),
    vue(),
    vueJsx(),
    vitePluginForArco({
      style: 'css',
    }),
    Components({
      resolvers: [ArcoResolver({ importStyle: true })],
    }),
  ],
})
