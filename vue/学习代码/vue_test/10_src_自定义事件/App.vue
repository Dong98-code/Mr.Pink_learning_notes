<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<MySchool :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref）， 可以得到VC的实例对象 -->  
		<MyStudent ref="student" @click.native="show"/>
		<!-- <MyStudent v-on:atguigu="demo"/> -->
	</div>
</template>

<script>
	import MyStudent from './components/MyStudent.vue'
	import MySchool from './components/MySchool.vue'

	export default {
		name:'App',
		components:{MySchool,MyStudent},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			demo() {
				console.log('demo调用');
			},
			getStudentName(name,...params){
				console.log('App收到了学生名：',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			// app挂在完毕
			// 拿到组件的实例对象， this.$refs.student， 名字为student，然后再给他绑定一个事件‘atguigu’, 然后指定一个回调函数
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
