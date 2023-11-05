import { useAuthStore } from "./store/auth";


export default function (to, from, next) {
    const authStore = useAuthStore();

    if (authStore.token) {
        next({ name: 'home' });
    } else {
        next();
    }
}
