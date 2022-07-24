<template>
  <el-row :gutter="10">
    <el-col :span="12">
        <el-card>
            <Search/>
        </el-card>
    </el-col>
    <el-col :span="12">
        <el-card>
            <Category/>
        </el-card>
    </el-col>

  </el-row>
</template>

<script>
import Search from './Search'
import Category from './Category'
export default {
  name: "Observe",
  components:{
    Search,
    Category
  }
};
</script>

<style>
</style>