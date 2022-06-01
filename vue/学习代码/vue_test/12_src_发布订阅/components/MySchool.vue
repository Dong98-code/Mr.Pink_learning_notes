<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		
	</div>
</template>

<script>
	export default {
		name:'MySchool',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			// 给数据总线bus绑定一个事件hello,触发之后 执行回调函数， data来自$emit触发时传入的数据
			this.$bus.$on('hello', (data) => {
				console.log('school组件', data);
			})
		},
		beforeDestroy() {
			this.$bus.$off('hello'); // 销毁之前， 解绑hello事件
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>