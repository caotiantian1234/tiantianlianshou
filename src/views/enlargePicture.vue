<!--练习vue3格式的-->
<template>
    <div id="bigbox">
        <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
        ></el-date-picker>
    </div>
</template>
<script>
import { reactive, ref, watch, toRefs, watchEffect } from "vue"
export default ({
    setup(props, context) {
        const value1 = ref('')
        const year = ref(0)
        const user = reactive({ nickname: 'xiaofan', age: 34, gender: '女' })
        const state = reactive({
            room: {
                id: 210,
                attrs: {
                    size: "140平方米",
                    type: '三室两厅'
                }
            }
        })
        setInterval(() => {
            state.room.id++
            year.value++
            user.age++
        }, 1000)
        const stopWatchRoom = watch(() => state.room, (newType, oldType) => {
            console.log('新知', newType, '就只', oldType)
        }, { deep: true })
        setTimeout(() => {
            stopWatchRoom()
        }, 3000)
        watchEffect(() => {
            console.log(state, '我是state');
            console.log(year, '我是year');
        }
        );
        // watch(
        //     () => state.room,
        //     (newType, oldType) => {
        //         console.log("新值:", newType, "老值:", oldType);
        //     },
        //     { deep: true }
        //     // 监听对象中的对象的值监听一个可以，但是批量监听会报undefined
        //     // [() => user.age, year,() => state.room], ([curAge, preAge], [newVal, oldVal],[newType, oldType]) => {
        //     //     console.log('新知', curAge, '老值', preAge), console.log('心智', newVal, '老值', oldVal),console.log("新值:", newType, "老值:", oldType);
        //     // },
        //     // {deep:true}
        // )
        return {
            value1,
            year,
            state,
            ...toRefs(user)
        }
    },
})
</script>
<style scoped>
</style>
  