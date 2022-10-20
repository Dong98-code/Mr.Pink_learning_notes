<template>
    <!-- <div>{{msg}}</div> -->
    <div v-for="(idx, num) in arr" :key="idx">{{num}}</div>
    <!-- 冒泡 v-oN -->
    <div @click="parent">
        parent
        <div @click.stop="child">child</div>
    </div>
    <!-- bind 绑定 class -->
    <div v-bind:class="[flag?'active':'other']">122345</div>
    <!-- v-model 学习 -->
    <p>my message is: {{message}}</p>
    <input v-model="message" placeholder="edit me">

    <!-- input -->
    <br/>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>

    <br/>
    <div> check name:{{checkedNames}}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
 
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
 
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
// const msg: string = "hello world";
const arr: Array<number> = [1,2,3,4,5]
const child = ():void => {
    console.log("child")
}
const parent = (): void => {
    console.log("parent")
}
// v-bind学习
const flag: boolean = true;
// v-model
const message = ref("")

// check box
const checked = ref(true); 
const checkedNames = reactive([])
</script>


<style scoped>
.active {
    color: red;
}
.other {
    color: blue;
}
.h {
   height: 300px;
   border: 1px solid #ccc; 
}
</style>