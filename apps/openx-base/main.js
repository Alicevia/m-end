import './src/style/index.css'
import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
const app = createApp(App)
app.use(WujieVue)
app.use(ArcoVueIcon)
app.mount('#app')
