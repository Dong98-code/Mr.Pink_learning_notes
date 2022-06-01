<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<MySchool/>
		<MyStudent/>
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
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
