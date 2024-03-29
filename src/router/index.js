import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtpVerification from '../views/OtpVerificationView.vue'
import AllBlogView from '../views/AllBlogView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import AllBrands from '../views/AllBrandView.vue'
import ProductView from '../views/AllProductView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import AccessoriesView from '../views/AllAccessoriesView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import RecoverPassword from '../views/RecoverPasswordView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderConfirmView from '../views/OrderConfirmView.vue'
import authGuard from '../authGuard'
import checkoutGuard from '../checkoutGuard'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
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
            beforeEnter: authGuard
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp,
            beforeEnter: authGuard
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword,
            beforeEnter: authGuard
        },
        {
            path: '/recover-password/:user_id',
            name: 'RecoverPassword',
            component: RecoverPassword,
            props: route => ({
                user_id: route.params.user_id,
            }),
            // beforeEnter: authGuard
        },
        {
            path: '/all-products',
            name: 'products',
            component: ProductView
        },
        {
            path: '/products/:id/details',
            name: 'productDetails',
            component: ProductDetailsView,
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
            path: '/cart',
            name: 'cart',
            component: CartView
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutView,
            beforeEnter: checkoutGuard
        },
        {
            path: '/order-placed',
            name: 'orderPlaced',
            component: OrderConfirmView,
            beforeEnter: checkoutGuard
        },
        {
            path: '/otp-verification/:url',
            name: 'otpVerify',
            component: OtpVerification,
            props: route => ({
                url: route.params.url,
                mobile: route.query.mobile,
                user_id: route.query.user_id,
            }),
            beforeEnter: authGuard
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})

export default router