<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生的姓名给学校组件</button>

	</div>
</template>

<script>
	export default {
		name:'MyStudent',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		methods: {
			sendStudentName() {
				//$emit触发 bus上的hello事件， 返回666并执行 这个回调函数
				this.$bus.$emit('hello', this.name)
			}
		},
	}
</script>

<style lang="css" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
