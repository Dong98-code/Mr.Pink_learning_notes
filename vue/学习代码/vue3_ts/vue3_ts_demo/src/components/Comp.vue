<template>
  <div>
    xingddd
    {{counter}}
  </div>
  <!-- 代办事项的内容 -->
  <div v-for="(item, index) in items" :key="item.id">{{item.name}}</div>

  <!-- titleIFNO -->
  <div>
    <h1 :style="{color:titleInfo.color}">{{titleInfo.value}}</h1>
  </div>
</template>

<!-- <script lang='ts' setup>
    import {ref} from "vue"
    const counter = ref(0)
</script> -->

<script lang="ts">
import { defineComponent,PropType} from "vue"

type Todo = {
    id: number,
    name:string
}

type TitleInfo = {
    value: string,
    color:string
}
export default defineComponent({
    // props
    props: {
        titleInfo: {
            type: Object as PropType<TitleInfo>,
            required:true
        }  
    },
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