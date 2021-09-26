<template>
    <div class="about">
        <div class="sideBar">
            <ul>
                <li>
                    <img src="../../public/image/sideBar.png" alt />
                </li>
                <li
                    @click="routerGo(item.name)"
                    v-for="(item,i) in sideBar"
                    :key="i"
                >{{ item.meta.title }}</li>
            </ul>
        </div>
        <v-header />
        <router-view />
    </div>
</template>
<script>
import { computed, reactive } from "vue";
import vHeader from "../components/Header.vue";
import router, { routes } from '../router/index.js'
import { useRouter, useRoute } from "vue-router";
export default {
    components: {
        vHeader,
    },
    setup() {
        const router = useRouter()
        const sideBar = reactive(routes[1].children)
        console.log(sideBar, '我是side')
        const routerGo = (item) => {
            console.log(item, '我是item')
            router.push(item)
        }
        return {
            sideBar,
            routerGo
        }
    },
};
</script>
<style>
.sideBar {
    position: fixed;
    width: 180px;
    height: auto;
    min-height: 200px;
    z-index: 100;
    bottom: 30px;
    border-radius: 5px;
    left: 20px;
    background: #fff;
    border: 1px solid rgb(212, 211, 211);
    overflow: hidden;
}
.sideBar ul {
    padding: 0;
    margin: 0;
}
.sideBar:hover {
    box-shadow: 0 12px 24px 0 rgb(0 0 0 / 10%);
}
.sideBar ul li:not(li:first-child) {
    font-size: 15px;
    cursor: pointer;
    list-style: none;
    line-height: 25px;
    padding-left: 10px;
}
.sideBar ul li:first-child img {
    width: 100%;
    height: 90px;
}
</style>
