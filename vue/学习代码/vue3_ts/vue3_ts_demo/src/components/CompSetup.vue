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

  <!-- 计算属性 -->
  <div>
    {{doubleCounter}}
  </div>
  <!-- 新增代办 -->
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
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
            items: [] as Todo[], // 断言
            todoName:""
        }
    },
    created() {
        this.items.push({
            id: 1,
            name:"xddd"
        });
    },
    // 约束 computed类型，之约束返回值
    computed: {
        doubleCounter(): number{
            return this.counter*2
        }
    },
    methods: {
        newTodo(todoName: string): Todo {
            return {
                id: this.items.length + 1,
                name: todoName,
            }
        },
        addTodo(todo: Todo): void {
            this.items.push(todo);
            this.todoName = ""
        }
    }
})
</script>
<style scoped lang='less'>
    
</style>