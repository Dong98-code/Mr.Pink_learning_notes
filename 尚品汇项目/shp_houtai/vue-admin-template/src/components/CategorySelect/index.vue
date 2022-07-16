<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="cForm">
      <el-form-item label="一级分类">
        <el-select
          placeholder="请选择"
          value=""
          v-model="cForm.category1Id"
          @change="handler1"
        >
          <!-- value 收集表单数据，需要收集的是1id -->
          <!-- v-model的值为当前被选中的el-option的 value 属性值, 因此1Id被收集到了 -->
          <el-option
            :label="c1.name"
            :value="c1.id"
            v-for="c1 in list1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          placeholder="请选择"
          value=""
          v-model="cForm.category2Id"
          @change="handler2"
        >
          <el-option
            :label="c2.name"
            :value="c2.id"
            v-for="c2 in list2"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          placeholder="请选择"
          value=""
          v-model="cForm.category3Id"
          @change="handler3"
        >
          <el-option
            v-for="c3 in list3"
            :key="c3.id"
            :label="c3.name"
            :value="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      // 收集分类的id
      cForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  mounted() {
    // 挂载完毕获取 一级分类的接口，
    this.getCategory1List();
  },
  methods: {
    async getCategory1List() {
      let res = await this.$API.attr.reqCategory1List();
      // console.log(res);
      // 设置响应式数据存储相对应的数据
      //{id,name}
      this.list1 = res.data;
    },
    async handler1(params) {
      // 先 清除之后的id的属性值
      // this.list2 = [];
      // this.list3 = [];
      this.cForm.category2Id = "";
      this.cForm.category3Id = "";
      // console.log(params);
      // 此时已经能获取此时 的一级分类的ID
      // 该函数的返回值就是 当前的选中的值 即此时 
      this.$emit("getCategoryId", { categoryId: params, level: 1 });
      let res = await this.$API.attr.reqCategory2List(params);
      if (res.code == 200) {
        this.list2 = res.data;
      }
    },
    async handler2(params) {
      // this.list3 = [];
      this.cForm.category3Id = "";
      // console.log(params);
      // 此时已经能获取此时 的一级分类的ID
      // 该函数的返回值就是 当前的选中的值 即此时 category1Id
      this.$emit("getCategoryId", { categoryId: params, level: 2 });

      let res = await this.$API.attr.reqCategory3List(params);
      if (res.code == 200) {
        this.list3 = res.data;

      }
    },
    // 三级分类的回调
    handler3(params) {
      this.$emit("getCategoryId", { categoryId: params, level: 3 });

    },
  },
};
</script>

<style>
</style>