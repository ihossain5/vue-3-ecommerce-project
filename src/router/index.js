import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtpVerification from '../views/OtpVerificationView.vue'
import AllBlogView from '../views/AllBlogView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import AllBrands from '../views/AllBrandView.vue'
import ProductView from '../views/AllProductView.vue'
import AccessoriesView from '../views/AllAccessoriesView.vue'
import { useAuthStore } from '../store/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/all-brands',
      name: 'allBrands',
      component: AllBrands
    },   
     {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        
        // Check if the user is authenticated
        if (authStore.token) {
          // Redirect the user to another page, e.g., the home page
          next({ name: 'home' });
        } else {
          // Continue to the login page
          next();
        }
      },
    },    
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },    
    {
      path: '/all-products',
      name: 'products',
      component: ProductView
    },    
    {
      path: '/all-accessories',
      name: 'all-accessories',
      component: AccessoriesView
    },
    {
      path: '/blogs',
      name: 'blog',
      component: AllBlogView
    },
    {
      path: '/otp-verification',
      name: 'otpVerify',
      component: OtpVerification
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

export default router
