<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <br />
  <h2>当前信息时：{{ msg }}</h2>
  <button @click="msg += '!'">点击+'!'</button>
  <br>
  <h2>name:{{person.name}}</h2>
  <h3>age:{{person.age}}</h3>
  <button @click="person.name+='--'">修改姓名</button>
  <button @click="person.age++">年龄增长</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, watch , reactive, watchEffewatchEffect, watchEffect} from "vue";
export default {
  name: "MyDemo",

  // watch: {
  //   // sum(newValue, oldValue) {
  //   //   console.log('sum变化', newValue, oldValue);
  //   // }
  //   sum: {
  //     immediate:true,
  //     deep:true,// 深度监视
  //     handler(newValue, oldValue) {
  //       console.log("sum变化", newValue, oldValue);
  //     },
  //   },
  // },
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("你好");
    const person = reactive({
      name:'xdd',
      age:10
    })
    // // 监视， 函数
    // // 监视ref定义的响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变化',newValue, oldValue);
    // },{immediate:true})

    // 2. 监视 ref定义的多个数据, 调用多次watch函数
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg变化", newValue, oldValue);
    // });

    // 数组
    // watch([msg, sum], (newValue, oldValue) => {
    //   console.log("数据变化", newValue, oldValue);
    // });

    // 3. reactive 监视对象
    // 返回对象
    // watch(
    //   () => person, 
    //   (person, newPerson) => {
    //   console.log('person变化', person, newPerson);
      
    // },{deep:true})

    // // 4. 监视reactive某一个属性
    // watch(
    //   () => person.name, 
    //   (name, newName) => {
    //   console.log('name变化了', name, newName);
      
    // },{deep:true})
    // // 5. 监视reactive 某一些数据
    // watch(
    //   [() => person.name, () => person.age], 
    //   (name, newName) => {
    //   console.log('name变化了', name, newName);
      
    // },{deep:true})

    // watchEffect, 不用 声明监视对象
    watchEffect(() => {
      console.log('watcheffect执行了');
      // 在回调函数里面 用到了什么 监视什么
      const x1 = sum.value;
      const x2 = person.name;
    })

    return {
      person,
      msg,
      sum
    };
  },
};
</script>

