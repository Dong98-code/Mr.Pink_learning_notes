<template>
  <ul>
    <li v-for="m in messageLsit" :key="m.id">
      <!-- 字符串写法， params参数-->
      <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      <router-link
        :to="{
          name: 'xiangqing',

          query: {
            id: m.id,
            title: m.title,
          },
        }"
      >
        {{ m.title }}
      </router-link>
      <button @click="pushShow(m)">push查看</button>
      <button @click="replaceShow(m)">replace操作</button>
    </li>

    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageLsit: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",

        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",

        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>


