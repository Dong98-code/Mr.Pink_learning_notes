<template>
  <div>
    xingddd
    {{counter}}
  </div>
  <!-- 代办事项的内容 -->
  <div v-for="(item, index) in items" :key="item.id">{{item.name}}</div>
</template>

<!-- <script lang='ts' setup>
    import {ref} from "vue"
    const counter = ref(0)
</script> -->

<script lang="ts">
import { defineComponent } from "vue"

type Todo = {
    id: number,
    name:string
}
export default defineComponent({
    data() {
        return {
            counter: 1,
            items: [] as Todo[] // 断言
        }
    },
    created() {
        this.items.push({
            id: 1,
            name:"xddd"
        });
    }
})
</script>
<style scoped lang='less'>
    
</style>