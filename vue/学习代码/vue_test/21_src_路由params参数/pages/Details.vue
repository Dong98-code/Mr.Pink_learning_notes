<template>
  <ul>
      <!-- 在这不用写this -->
      <!-- <li>消息编号：{{$route.query.id}}</li>
      <li>消息名称：{{$route.query.title}}</li> -->
      <li>消息编号：{{$route.params.id}}</li>
      <li>消息名称：{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
    name:"MyDetails",
}
</script>

<style>

</style>