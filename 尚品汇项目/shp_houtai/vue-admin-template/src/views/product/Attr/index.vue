<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect @getCategoryId="getCategoryId"></CategorySelect>
    </el-card>
    <el-card>
      <!-- 表格部分 -->
      <div v-show="isShowTable">
        <!-- 添加禁用属性 -->
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="margin-bottom: 10px"
          :disabled="!category3Id"
          @click="isShowTable = false"
          >添加属性</el-button
        >
        <el-table style="width: 100%" border :data="attrList">
          <el-table-column align="center" type="index" width="80" label="序号">
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="attrName"
            width="150"
            label="属性列表"
          >
          </el-table-column>
          <el-table-column header-align="center" prop="prop" label="属性值列表">
            <template slot-scope="{ row }">
              <el-tag
                type="success"
                v-for="attrValue in row.attrValueList"
                :key="attrValue.id"
                style="margin-left: 20px"
                >{{ attrValue.valueName }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="prop"
            width="150"
            label="操作"
          >
            <template slot-scope="{}">
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 添加属性和修改属性 -->
      <div v-show="!isShowTable">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item label="属性名">
            <el-input placeholder="请输入属性名"></el-input>
          </el-form-item>
        </el-form>
        <!-- 添加属性名按钮和取消 -->
        <el-button type="primary" icon="el-icon-plus">添加属性值</el-button>
        <el-button type="" @click="isShowTable=true">取消</el-button>
        <!-- 表格 -->
        <el-table style="width: 100%;margin:20px 0px" border>
          <el-table-column label="序号" type="index" width="80" align="center">
          </el-table-column>
          <el-table-column label="属性值名称" prop="prop" width="width" align="center">
          </el-table-column>
          <el-table-column label="操作" prop="prop" width="width" align="center">
          </el-table-column>
        </el-table>
        <!-- 保存和取消按钮 -->
        <el-button type="primary">保存</el-button>
        <el-button type="" @click="isShowTable=true">取消</el-button>
      </div>
    </el-card>
    <!-- <el-card></el-card> -->
  </div>
</template>

<script>
export default {
  name: "Attr",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      // 平台属性列表
      attrList: [],
      // 是否展示table
      isShowTable: false,
    };
  },
  methods: {
    //自定义事件的回调
    getCategoryId({ categoryId, level }) {
      //区分三级分类相应的id，以及父组件进行存储
      if (level == 1) {
        this.category1Id = categoryId;
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        //代表三级分类的id有了
        this.category3Id = categoryId;
        //发请求获取平台的属性数据
        this.getAttrList();
      }
    },
    //获取平台属性的数据
    //当用户确定三级分类的数据时候，可以向服务器发请求获取平台属性进行展示
    async getAttrList() {
      //获取分类的ID
      const { category1Id, category2Id, category3Id } = this;
      //获取属性列表的数据
      let result = await this.$API.attr.reqAttrList(
        category1Id,
        category2Id,
        category3Id
      );
      if (result.code == 200) {
        this.attrList = result.data;
      }
    },
  },
};
</script>

<style>
</style>