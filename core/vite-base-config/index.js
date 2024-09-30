import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  plugins: [
    
    vue(),
    vueJsx(),
    // vitePluginForArco({
    //   style: 'css',
    // }),
    Components({
      resolvers: [ArcoResolver({ importStyle: true })],
    }),
  ],
})
