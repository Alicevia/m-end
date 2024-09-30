import './src/style/index.css'
import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
const app = createApp(App)

app.use(WujieVue)
app.mount('#app')
