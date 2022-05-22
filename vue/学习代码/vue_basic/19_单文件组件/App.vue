<template>
	<div>
		<!--  -->
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//app 汇总所有的组件
	// 引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
