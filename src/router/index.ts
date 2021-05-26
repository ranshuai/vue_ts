import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
    {
        path: '/login',
        component:() => import(/* webpackChunkName: "dashboard" */ '@/views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
              path: 'dashboard',
              component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
            }
          ]
    }
]

const createRouter = () => new VueRouter({
    // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
    routes: constantRoutes
})

const router:any = createRouter()
export default router