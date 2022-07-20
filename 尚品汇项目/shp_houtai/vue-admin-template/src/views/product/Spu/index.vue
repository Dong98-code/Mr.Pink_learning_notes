<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene!=0"
      ></CategorySelect>
    </el-card>
    <el-card>
      <!-- spu列表 -->
      <div v-show="scene==0">
        <!-- spu列表 -->
        <el-button type="primary" icon="el-icon-plus" style="margin-bottom:10px" :disabled="!category3Id" @click="addSpu">添加SPU</el-button>
        <!-- table -->
        <el-table style="width: 100%" :data="records" border>
          <el-table-column label="序号" width="80" type="index" align="center">
          </el-table-column>
          <el-table-column prop="spuName" label="SPU名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="SPU描述" width="width">
          </el-table-column>
          <el-table-column label="操作" width="width">
            <template slot-scope="{row}">
              <!-- 这里按钮将来用hintButton替换 -->
              <hint-button
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加sku"
              ></hint-button>
              <hint-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                title="修改spu"
                @click="updateSpu(row)"
              ></hint-button>
              <hint-button
                type="info"
                icon="el-icon-info"
                size="mini"
                title="查看当前spu全部sku列表"
              ></hint-button>

              <el-popconfirm
                title="这是一段内容确定删除吗？"
                @onConfirm="deleteSpu(row)"
              >
                <hint-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  title="删除spu"
                  slot="reference"
                ></hint-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center"
          :current-page="page"
          :page-sizes="[3, 5, 10]"
          :page-size="7"
          layout="prev, pager, next, jumper,->, sizes,total"
          :total="total"
          @current-change="getSpuList"
          @size-change="handleSizeChange"
        >
        </el-pagination>
      </div>
      <!-- spuForm -->
      <SpuForm v-show="scene==1" @changeScene="changeScene" ref="spu"></SpuForm>
      <SkuForm v-show="scene==2" ></SkuForm>
      <!-- skuForm -->
    </el-card>
  </div>
</template>

<script>
import SpuForm from "./spuForm";
import SkuForm from "./skuForm";
export default {
  name: "Spu",
  data() {
    return {
      //分别是分类的id
      category1Id: "",
      category2Id: "",
      category3Id: "",
      show: true,
      page: 1, // 分页器当前的页数
      limit: 2, // 分页器展示数据个数
      records: [], // spu数据
      total: 0, // 一共多少条数据
      scene: 0, // 0表示spu列表 1 添加修改spu 2 添加修改skU
    };
  },
  methods: {
    //三级联动的自定义事件，可以把子组件的相应的id传递给父组件
    getCategoryId({ categoryId, level }) {
      //categoryId:获取到一、二、三级分类的id  level：为了区分是几级id
      if (level == 1) {
        this.category1Id = categoryId;
        //清除2、3级分类的id
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        //清除3级id
        this.category3Id = "";
      } else {
        this.category3Id = categoryId;
        //获取SPU列表数据进行展示
        this.getSpuList();
      }
    },
    async getSpuList(pages = 1) {
      this.page = pages;
      let { page, limit, category3Id } = this;
      // 调用 api请求数据， 携带三个参数
      let res = await this.$API.spu.reqSpuList(page, limit, category3Id);
      // console.log(res);
      if (res.code == 200) {
        this.total = res.data.total;
        this.records = res.data.records; // spu数据
      }
    },
    // 点击改变当前页数；
    handleSizeChange() {
      //修改参数
      this.limit = limit;
      //再发请求
      this.getSpuList();
    },
    // 添加spu
    addSpu() {
      this.scene = 1;
      //通知子组件SpuForm发请求---两个
      this.$refs.spu.addSpuData(this.category3Id);
    },
    updateSpu(row) {
      this.scene = 1;
      // 点击修改按钮 然后 调用子组件的方法， 请求数据
      this.$refs.spu.initSpuData(row);
    },
    // 修改scene
    changeScene({scene, flag}) {
      // console.log(scene);
      this.scene = scene;
      // this.getSpuList(this.page)
      //子组件通知父组件切换场景，需要再次获取SPU列表的数据进行展示
      if (flag == "修改") {
        this.getSpuList(this.page); // 修改当前页
      } else {
        this.getSpuList();
      }
    },
    //删除SPU的回调
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code == 200) {
        this.$message({ type: "success", message: "删除成功" });
        //代表SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1 回到上一页
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
  },
  components: {
    SpuForm,
    SkuForm,
  },
};
</script>

<style>
</style>