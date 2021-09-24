<template>
    <div class="about">
        <v-header />
        <router-view />
    </div>
</template>
<script>
import { computed } from "vue";
import vHeader from "../components/Header.vue";
export default {
    components: {
        vHeader,
    },
    setup() {
        const tagsList = computed(() =>
            store.state.tagsList.map((item) => item.name)
        );
        const collapse = computed(() => store.state.collapse);
        return {
            tagsList,
            collapse,
        };
    },
};
</script>
