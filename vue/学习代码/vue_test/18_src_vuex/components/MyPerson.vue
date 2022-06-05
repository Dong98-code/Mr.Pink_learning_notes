<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personsList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import nanoid from 'nanoid'
// import {mapState} from 'vuex'
export default {
    name:"MyPerson",
    data() {
      return {
          name:"",
      } 
    },
    computed:{
        personsList() {
            return this.$store.state.personsList;
        }
        // ...mapState(['personsList'])
    },
    methods: {
        add() {
            // 获取输入框的值
            let personObj = {id:nanoid, name:"李四"}
            // 调用nutations中m_addPerson
            this.$store.commit('m_addPerson', personObj),
            this.name = ""
        }
    },
};
</script>

<style>
</style>