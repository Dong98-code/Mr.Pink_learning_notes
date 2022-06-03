<template>
	<div>
		<button @click="getStudents">点击获取学生信息</button>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name:"App",
		methods: {
			getStudents() {
				axios.get('http://localhost:8080/api/students').then(response =>{
					console.log(response.data);
				}, err => {
					console.log(err.message);
				}
				)
			}
		},
	}
</script>


