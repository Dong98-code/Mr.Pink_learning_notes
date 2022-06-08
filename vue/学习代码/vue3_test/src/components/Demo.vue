<template>
  <br>
  <h2>name:{{name}}</h2>
  <h3>age:{{age}}</h3>
  <h3>salary:{{person.job.j1.salary}}k</h3>
  <button @click="person.name+='--'">修改姓名</button>
  <button @click="person.age++">年龄增长</button>
  <button @click="person.job.j1.salary++">点击涨薪</button>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive, toRef, toRefs} from "vue";
export default {
  name: "MyDemo",

 
  setup() {
    const person = reactive({
      name:'xdd',
      age:10,
      job:{
        j1:{
        salary:30
        }
      }
    })

    const name = toRef(person, 'name')
    return {
      person,
      name,
      ...toRefs(person)
    };
  },
};
</script>

