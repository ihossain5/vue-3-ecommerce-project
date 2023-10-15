// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BASE_API_URL } from './config.js';


const app = createApp(App)

app.use(router)

app.config.globalProperties.BASE_API_URL = BASE_API_URL;

app.mount('#app')
