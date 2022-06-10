<template>
  <div>
    <!-- typernav 此时不需要引入了 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
     
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'




export default {
  name: "MyHome",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
};
</script>

<style>
</style>