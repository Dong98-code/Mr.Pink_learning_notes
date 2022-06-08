<template>
  <div class="sun">
    <h3>
      Childd组件, 孙 {{car.name}} __ {{car.price}}
    </h3>
    <button @click="car.price++">修改价格,孙</button>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name:"MySun",
  setup() {
    let car = inject('car');
    return {
      car
    }
  }
}
</script>

<style>
  .sun {
    background-color: orange;
    padding: 10px;
  }
</style>