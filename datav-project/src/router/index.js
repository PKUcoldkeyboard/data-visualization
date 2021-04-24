import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/datav'
    },
    {
        path: '/datav',
        component: () => import('@/views/layout'),
        children: [
            {
                path: 'full-screen-container',
                name: 'full-screen-container',
                component: () => import('@/views/full-screen-container')
            },
            {
                path: 'loading',
                name: 'loading',
                component: () => import('@/views/loading')
            },
            {
                path: 'border-box',
                name: 'border-box',
                component: () => import('@/views/border-box')
            },
            {
                path: 'decoration',
                name: 'decoration',
                component: () => import('@/views/decoration')
            },
            {
                path: 'chart',
                name: 'chart',
                component: () => import('@/views/chart')
            },
            {
                path: 'active-ring-chart',
                name: 'active-ring-chart',
                component: () => import('@/views/active-ring-chart')
            },
            {
                path: 'capsule-chart',
                name: 'capsule-chart',
                component: () => import('@/views/capsule-chart')
            },
            {
                path: 'water-level-pond',
                name: 'water-level-pond',
                component: () => import('@/views/water-level-pond')
            },
            {
                path: 'percent-pond',
                name: 'percent-pond',
                component: () => import('@/views/percent-pond')
            },
            {
                path: 'flyline-chart',
                name: 'flyline-chart',
                component: () => import('@/views/flyline-chart')
            },
            {
                path: 'flyline-chart-enhanced',
                name: 'flyline-chart-enhancedd',
                component: () => import('@/views/flyline-chart-enhanced')
            },
            {
                path: 'conical-column-chart',
                name: 'conical-column-chart',
                component: () => import('@/views/conical-column-chart')
            },
            {
                path: 'digital-flop',
                name: 'digital-flop',
                component: () => import('@/views/digital-flop')
            },
            {
                path: 'scroll-board',
                name: 'scroll-board',
                component: () => import('@/views/scroll-board')
            },{
                path: 'scroll-ranking-board',
                name: 'scroll-ranking-board',
                component: () => import('@/views/scroll-ranking-board')
            }

        ]
    }
]

const router = new VueRouter({
    routes
})

export default router