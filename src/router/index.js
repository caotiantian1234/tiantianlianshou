import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import {
    setRouterName,
    getRouterName
} from '../utils/auth'

export const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: "/",
    name: "Home",
    component: Home,
    children: [{
        path: "/index",
        name: "index",
        meta: {
            title: '九宫格'
        },
        component: () => import( /* webpackChunkName: "dashboard" */ "../views/index.vue")
    }, {
        path: "/enlargePicture",
        name: "enlargePicture",
        meta: {
            title: '日期选择器'
        },
        component: () => import( /* webpackChunkName: "table" */ "../views/enlargePicture.vue")
    }, {
        path: "/ButtonEffect",
        name: "ButtonEffect",
        meta: {
            title: '按钮动态效果'
        },
        component: () => import( /* webpackChunkName: "table" */ "../views/ButtonEffect.vue")
    }, {
        path: "/switchPages",
        name: "switchPages",
        meta: {
            title: '切换页面效果'
        },
        component: () => import( /* webpackChunkName: "table" */ "../views/switchPages.vue")
    }]
}]
// ButtonEffect.vue
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    setRouterName(JSON.stringify(to))
    next()
});

export default router;