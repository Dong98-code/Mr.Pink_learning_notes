<template>
  <h1>信息</h1>
  姓：<input type="text" name="" id="" v-model="person.firstName"/>
  <br>
  <br>
  名：<input type="text" name="" id="" v-model="person.lastName" />

  <br>
  全名：<span>{{fullName}}</span>
  <br>
  全名：<input type="text" v-model="fullName">
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive, computed} from "vue";
export default {
  name: "MyDemo",
  // computed:{
  //   fullName() {
  //     return this.person.firstName + this.person.lastName;
  //   }
  // },
  setup(props, context) {
    let person = reactive({
      firstName: "张",
      lastName: "3",
    });
    // 计算属性， 函数
    let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
    // 返回对象
    return {
      person,
      fullName
    };
  },
};
</script>

