// import './assets/main.css'
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'

import { BASE_API_URL } from './config.js';
import { useAuthStore } from './store/auth';
import router from './router'

const app = createApp(App)

app.use(createPinia());

const authStore = useAuthStore();

const authToken = localStorage.getItem('authToken');
const authUser = localStorage.getItem('authUser');
if (authToken) {
    authStore.token = authToken;
    authStore.user = JSON.parse(authUser);
}

app.use(router)

app.config.globalProperties.BASE_API_URL = BASE_API_URL;

app.mount('#app')
