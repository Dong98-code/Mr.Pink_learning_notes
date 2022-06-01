<template>
	<div id="root">
		<div class="todo-container">
		<div class="todo-wrap">
			<MyHeader :receive="receive"/>
			<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
			<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
		</div>
		</div>
	</div>
</template>

<script>import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'

export default {

	name:'App',
	components: {
		MyHeader,
		MyList,
		MyFooter
	},
	data () {
		// 首先从内存中获取 data
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
	methods: {
		receive(todoObj) {
			console.log('数据', todoObj);
			this.todos.unshift(todoObj)
		},
		// 勾选
		checkTodo(id) {
			this.todos.forEach(element => {
				if (element.id === id) {
					element.done = !element.done;
				}
			});
		},
		deleteTodo(id) {
			this.todos = this.todos.filter((todo)=>{
				return todo.id !== id;
			})
		},
		checkAllTodo(done) {
			this.todos.forEach(el => {
				// 每个元素的done属性值 = done
				el.done = done;
			})
		},
		// 清除所有已经完成的item
		clearAllTodo() {
			this.todos = this.todos.filter((el)=> {
				return !el.done
			})
		}
	},
	watch: {
		// todos(value) {
		// 	localStorage.setItem('todos',JSON.stringify(value));
		// }
		todos: {
			deep:true,
			handler(value) {
			localStorage.setItem('todos',JSON.stringify(value));

			}
		}
	}
}

</script>

<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0. 2), 0 1px 2px rgba(0, 0, 0, 0 05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}

.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

</style>