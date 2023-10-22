import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBlogView from '../views/AllBlogView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import AllBrands from '../views/AllBrandView.vue'
import ProductView from '../views/AllProductView.vue'
import AccessoriesView from '../views/AllAccessoriesView.vue'

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
    },    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
