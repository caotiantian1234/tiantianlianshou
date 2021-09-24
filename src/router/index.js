import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
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
            title: '首页'
        },
        component: () => import( /* webpackChunkName: "dashboard" */ "../views/index.vue")
    }, {
        path: "/enlargePicture",
        name: "enlargePicture",
        meta: {
            title: '实例'
        },
        component: () => import( /* webpackChunkName: "table" */ "../views/enlargePicture.vue")
    }]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;