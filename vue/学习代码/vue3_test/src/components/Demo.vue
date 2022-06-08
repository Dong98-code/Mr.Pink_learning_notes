<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <br />
  <h2>当前信息时：{{ msg }}</h2>
  <button @click="msg += '!'">点击+'!'</button>
  <br />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
export default {
  name: "MyDemo",

  setup() {
    console.log('---set up');
    let sum = ref(0);
    let msg = ref("你好");

    onBeforeMount(() => {
      console.log("----onBeforeMount");
    });
    onMounted(() => {
      console.log("----onMounted");
    });
    onBeforeUnmount(() => {
      console.log("----onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("----onUnmounted");
    });
    onBeforeUpdate(() => {
      console.log("----onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("----onUpdated");
    });
    return {
      msg,
      sum,
    };
  },
  //#region

  // beforeCreate() {
  //   console.log('---beforeCreate---');
  // },
  // created() {
  //   console.log('---Create---');
  // },
  // beforeMount() {
  //   console.log('---beforeMount---');
  // },
  // mounted() {
  //   console.log('---Mounted---');
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdated---');
  // },
  // updated() {
  //   console.log('---updataed---');
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnMount---');
  // },
  // unmounted() {
  //   console.log('---unMounted---');
  // }
  //#endregion
};
</script>

