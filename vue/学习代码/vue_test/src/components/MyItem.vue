<template>
<transition name="hello">
<li>
        <label>
            <input type="checkbox" :checked="todo.done"     @click="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="delButton    (todo.id)">删除</button>
    </li>
</transition>
    
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
.hello-enter, .hello-leave-to {
        transform: translate(-100%);
    }
    .hello-leave, .hello-enter-to {
        transform: translate(0px);
    }
    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }
</style>