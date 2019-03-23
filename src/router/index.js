import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Product from '@/components/Product/Product.vue'
import SignUp from '@/components/SignUp/SU.vue'
import LogIn from '@/components/LogIn/LI.vue'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Product',
            name: 'Product',
            component: Product
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: LogIn
        },
    ],
})