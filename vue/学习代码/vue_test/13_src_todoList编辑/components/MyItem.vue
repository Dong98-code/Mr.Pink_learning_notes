<template>
<li>
    <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
            v-show="todo.isEdit" 
            type="text" 
            :value="todo.title" 
            @blur="handelBlur(todo, $event)"
            ref="inputTitle"
        >


    </label>
    <button class="btn btn-danger" @click="delButton(todo.id)">删除</button>
    <button class="btn btn-edit" @click="editButton(todo)">编辑</button>

</li>
</template>

<script>
export default {
    name:"MyItem",
    // 声明接受 todo 对象
    props:['todo', 'checkTodo', "deleteTodo"],
    methods: {
        handleCheck(id) {
            // console.log(id);
            //app组件对应的todo对象的值取反
            //数据在App在App组件，操作数据
            this.checkTodo(id);
        },
        delButton(id) {
            // 删除
            // console.log(id);
            if (confirm('删除？')) {
                // console.log(id);
                // 通知App, 删除ID
                this.deleteTodo(id);
            }

        },
        editButton(todo) {
            if (Object.hasOwnProperty.call(todo, 'isEdit')) {
                // 没有edit属性
                this.isEdit = true;
            } else {
                this.$set(todo, 'isEdit', true);

            }
            // 拿到输入框 获取焦点
            // dom节点之后再执行
            this.$nextTick(function() {
                this.$refs.inputTitle.focus(); // 此刻获取焦点
            })
        },
        // 执行修改逻辑
        handelBlur(todo, e) {
            todo.isEdit = false;
            this.$bus.$emit('UpdateTodo', todo.id, e.target.value)
        }
    },
    
}
</script>


<style scoped>
/*item*/
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	/* display: none; */
    display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}
li:hover {
    background-color:#ddd ;
}
li:hover button{
    display: block;
}
</style>