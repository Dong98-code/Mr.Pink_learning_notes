<template>
<!-- template 不参与结构编译 -->
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
// 使用默认暴漏，简单
// 直接暴露组件的配置对象
	 export default {
		//  组件name
		name:'School',
		data(){
			// 数据
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}

</script>

<style>
/*  */
	/* .demo{
		background-color: orange;
	} */
	.demo{
		background-color:orange ;
	}
</style>