<template>
  <ul>
      <!-- 在这不用写this -->
      <!-- <li>消息编号：{{$route.query.id}}</li>
      <li>消息名称：{{$route.query.title}}</li>
       -->
      <li>消息编号：{{id}}</li>

      <li>消息名称：{{title}}</li>
      <!-- <li>a:{{a}}</li> -->
  </ul>
</template>

<script>
export default {
    name:"MyDetails",
    props:['id', 'title'],
    mounted() {
        // console.log(this.$route);
    },
}
</script>

<style>

</style>