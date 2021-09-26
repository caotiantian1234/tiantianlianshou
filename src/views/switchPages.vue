<template>
    <div class="index">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
    </div>
</template>
<script>

import {
    ref,
    reactive
} from "vue";
export default {
    //script标签下
    setup() {


        return {

        }
    },

}
</script>
<style scoped="scoped">
.index div {
    width: 100%;
    height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
.index .one {
    /* margin-top: 60px; */
    background: rgb(147, 167, 72);
    box-shadow: 0 4px 20px rgb(0 0 0 / 30%);
    z-index: 1;
}
.index .two {
    background: rgb(177, 79, 54);
}
.index .three {
    background: rgb(239, 227, 205);
}
.index .four {
    background: rgb(16, 82, 72);
}
</style>
