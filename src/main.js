import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'
import AosVue from "aos-vue"

createApp(App).use(router).mount('#app') .use(router).use(AosVue)
