<template>
    <div class="todo-footer" v-show="todos.length !== 0">
        <label>
            <input type="checkbox" :checked="isAll" @change="checkAll"/>
        </label>
        <span>
            <!-- 计算属性 完成总数 -->
            <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clearAllTodo">清除已完成任务 </button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        props:['todos', "checkAllTodo", "clearAllTodo"],
        computed: {
            doneTotal() {
                // reduce 条件统计

                // return 99;
                const x = this.todos.reduce((pre, cur)=>{
                    // 数组的长度为ji，调用几次
                    // 遍历了一次 todos数组
                    return pre + (cur.done? 1 : 0);
                }, 0)
                return x;
            },
            isAll() {
                return this.doneTotal === this.todos.length && this.todos.length > 0;
            }
        },
        methods: {
            checkAll(e) {
                // 判断是否全选？
                console.log(e.target.checked);
                this.checkAllTodo(e.target.checked)
            }, 
            clearAll() {

                if (confirm("是否清除")) {
                    this.clearAllTodo();
                }
            }
        },
    }
</script>

<style>
/*footer*/
.todo-footer {
    height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}
.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}
.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}
.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>