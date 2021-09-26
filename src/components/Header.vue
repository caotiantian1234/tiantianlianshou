<template>
  <div class="header">
    <span>♥ beautiful girl</span>
  </div>
</template>
<script>
import { computed, onMounted, watch, ref, toRefs, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {

    return {
    };
  }
};
</script>
<style scoped>
.header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  color: #fff;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 0 20px;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
}
.header span {
  font-size: 25px;
  font-family: "Impact";
  line-height: 60px;
}
</style>
