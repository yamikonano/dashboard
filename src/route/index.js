import { createRouter, createWebHistory } from 'vue-router'
import firebase from "firebase";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/register',
            component: () => import('../views/Register.vue'),
            meta: { noNeedAuth: true }
        },
        {
            path: '/sign-in',
            component: () => import('../views/SignIn.vue'),
            meta: { noNeedAuth: true }
        },
        {
            path: '/feed',
            component: () => import('../views/Feed.vue')
        },
        {
            path: '/reset',
            component: () => import('../views/ResetPwd.vue'),
            meta: { noNeedAuth: true }
        },
        {
            path: '/resetPw/',
            component: () => import('../views/CustomiseReset.vue'),
            meta: { noNeedAuth: true }
        },
        {
            path: '/ig-link',
            component: () => import('../views/Iglink.vue')
        },
        {
            path: '/verify',
            component: () => import('../views/Verify.vue')
        },
        {
            path: '/purchase',
            component: () => import('../views/Purchase.vue')
        },
        {
            path: '/payment',
            component: () => import('../pages/Payment.vue')
        },
        {
            path: '/payment-verify',
            component: () => import('../views/PaymentVerify.vue')
        },
        {
            path: '/dashboard',
            component: () => import('../views/dashboard/Dashboard.vue')
        },
        {
            path: '/community-builder',
            component: () => import('../views/dashboard/Community.vue')
        },
        {
            path: '/new-campaign',
            name:"NewCampaign",
            component: () => import('../views/dashboard/NewCampaign.vue')
        },
        {
            path: '/reports',
            name:"Reports",
            component: () => import('../views/dashboard/Reports/Reports.vue')
        },
        {
            path: '/users',
            name:"Users",
            component: () => import('../views/dashboard/Users/Users.vue')
        },
        // {
        //     path: '/crm',
        //     name:"CRM",
        //     component: () => import('../pages/CRM/CRM.vue')
        // },
        {
            path: '/crm/:category',
            name:"CRM",
            component: () => import('../pages/CRM/CRM.vue')
        },
        {
            path: '/',
            component: () => import('../views/SignIn.vue'),
            meta: { noNeedAuth: true }
        },
    ]
})
router.beforeEach((to, from, next) => {

    const noNeedAuth = to.matched.some(record => record.meta.noNeedAuth)

    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user,noNeedAuth, to.path )

        if (user&&noNeedAuth) {
            next('/purchase')
            console.log('1')
        }
        if(noNeedAuth && !user||user&&!noNeedAuth){
            next()
            console.log('2')
        }
        if(!user&&!noNeedAuth){
            next('/sign-in')
            console.log('3')
        }
    })

})

export default router