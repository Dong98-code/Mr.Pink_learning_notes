<template>
  <h1>我是组件App</h1>
  <h2>年龄：{{person.age }}</h2>
  <h2 v-show="person.name">name:{{person.name }}</h2>
  <h3>工作种类：{{ person.job.salary }}</h3>
  <h3>工作薪水：{{ person.job.type }}</h3>
  <h3>testc:{{ person.job.a.c }}</h3>
  <h3>爱好：{{ person.hobby[0] }}</h3>
  <h3 v-show="person.sex">性别{{person.sex}}</h3>
  <button @click="changeInfo">改变信息</button>
  <button @click="addSex" >添加性别</button>
  <button @click="deleteName">删除名字</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  // 暂时不考虑 响应式
  setup() {
    //数据 methods computed 等 都在里面
    //中间不能有逗号
    // 此处定义的数据不为响应式数据 
    // let name = ref('张三') // ref函数 返回为一个对象
    // let age = ref(18)
    // let job = reactive({
    //   type:'前端',
    //   salary:'20k',
    //   a:{
    //     c:10
    //   }
    // })

    let person = reactive({
      name: '张三',
      age: 10,
      job: {
      type:'前端',
      salary:'20k',
      a:{
        c:10
      }
    },
    hobby:['吸烟', '喝酒']

    })


    function changeInfo() {
      person.name = "xdd",
      person.age = 30
      // job.value.type = '后端'
      // console.log(job);
      // job.a.c = 11,
      // hobby[0] = 'xuexi'
    }

    function addSex() {
      person.sex = '男'
    }
    function deleteName() {
      delete person.name
    }
    // 返回对象
    return {
      person,
      // 记得返回 所需要的数据及methods
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>

