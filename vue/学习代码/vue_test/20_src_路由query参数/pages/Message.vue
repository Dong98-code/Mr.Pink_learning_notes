<template>
  <ul>
    <li v-for="m in messageLsit" :key="m.id">
      <!-- 字符串写法 -->
      <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      <router-link :to="{
        path:'/home/message/detail',
        
        query:{
          id:m.id,
          title:m.title
        }

      }">
        {{m.title}}
        </router-link>&nbsp;&nbsp;
    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageLsit:[
        {id:'001', title:"消息001"},
        {id:'002', title:"消息002"},
        {id:'003', title:"消息003"},

      ]
    }
  }
};
</script>


