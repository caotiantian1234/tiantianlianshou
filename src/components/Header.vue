<template>
  <div class="header">
    <div class="boxBtn">
      <el-icon color="#fff" size="80">
        <arrow-left-bold />
      </el-icon>
      <span>前一个页面</span>
    </div>
    <div class="boxBtn">
      <el-icon color="#fff">
        <arrow-right-bold />
      </el-icon>
      <span>后一个页面</span>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, watch, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();


    return {

    };
  }
};
</script>
<style scoped>
.header {
  display: flex;
  height: 60px;
  color: #fff;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 0 20px;
  animation: background-fade 10s forwards;
}
@keyframes background-fade {
  0% {
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  }
  30% {
    background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  }
  50% {
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  }
  70% {
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  }
  100% {
    background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  }
}
.header .boxBtn {
  line-height: 60px;
}
</style>
