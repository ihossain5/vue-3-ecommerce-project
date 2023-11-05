// import './assets/main.css'
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { BASE_API_URL } from './config.js';
import { useAuthStore } from './store/auth';
import router from './router'

const app = createApp(App)

app.use(createPinia());


const options = {
    position: POSITION.BOTTOM_CENTER,
};

app.use(Toast, options);

const authStore = useAuthStore();

const authToken = localStorage.getItem('authToken');
const authUser = localStorage.getItem('authUser');
const user_id = localStorage.getItem('user_id');
if (authToken) {
    authStore.token = authToken;
    authStore.user = JSON.parse(authUser);
}

if (user_id) {
    authStore.user_id = user_id;
}

app.use(router)

app.config.globalProperties.BASE_API_URL = BASE_API_URL;

app.mount('#app')
