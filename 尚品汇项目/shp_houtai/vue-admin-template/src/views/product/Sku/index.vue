<template>
  <div>
    <el-table border style="width: 100%" :data="records">
      <el-table-column type="index" label="序号" width="50" align="center">
      </el-table-column>
      <el-table-column prop="skuName" label="名称" width="width">
      </el-table-column>
      <el-table-column prop="skuDesc" label="描述" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="默认图片" width="100" align="center">
        <template slot-scope="{ row }">
          <img :src="row.skuDefaultImg" style="width: 80px; height: 80px" />
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="重量(KG)" width="100">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="110"> </el-table-column>
      <el-table-column prop="prop" label="操作" width="width" align="center">
        <template slot-scope="{ row }">
          <!-- 箭头表示： 向上点击之后 上架
            isOnsale=0: 不在销售，下架状态，点击上架，显示向上的箭头 -->
          <hint-button
            v-if="row.isSale == 0"
            type="success"
            icon="el-icon-sort-up"
            size="mini"
            title="上架"
            @click="sale(row)"
          ></hint-button>
          <hint-button
            v-else
            type="success"
            icon="el-icon-sort-down"
            size="mini"
            title="下架"
            @click="cancel(row)"
          ></hint-button>
          <hint-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            title="编辑"
          ></hint-button>
          <hint-button
            type="info"
            icon="el-icon-info"
            size="mini"
            title="详情"
            @click="getSkuInfo(row)"
          ></hint-button>
          <hint-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            title="删除"
          ></hint-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页          -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getSkuList"
      style="text-align: center"
      :current-page="page"
      :page-sizes="[3, 5, 10]"
      :page-size="limit"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total"
    >
    </el-pagination>
    <!-- 抽屉弹窗 -->
    <el-drawer :visible.sync="drawer" :show-close="false" size="50%">
      <el-row>
        <el-col :span="5">名称</el-col>
        <el-col :span="16">{{ skuInfo.skuName }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">描述</el-col>
        <el-col :span="16">{{ skuInfo.skuDesc }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">价格</el-col>
        <el-col :span="16">{{ skuInfo.price }}元</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">平台属性</el-col>
        <el-col :span="16">
          <template>
            <el-tag
              type="success"
              v-for="attr in skuInfo.skuAttrValueList"
              :key="attr.id"
              style="margin-right: 10px"
              >{{ attr.attrId }}-{{ attr.valueId }}</el-tag
            >
          </template>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">商品图片</el-col>
        <el-col :span="16">
          <el-carousel height="150px">
            <el-carousel-item
              v-for="item in skuInfo.skuImageList"
              :key="item.id"
            >
              <img :src="item.imgUrl" style="height:150px"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Sku",
  data() {
    return {
      page: 1,
      limit: 3,
      records: [], // skuList
      total: 0,
      skuInfo: {},
      drawer: false,
    };
  },
  mounted() {
    this.getSkuList(); // 挂载完就请求数据
  },
  methods: {
    async getSkuList(pages = 1) {
      this.page = pages;
      const { page, limit } = this;
      let res = await this.$API.sku.reqSkuList(page, limit);
      //   console.log(res);
      if (res.code == 200) {
        this.records = res.data.records;
        this.total = res.data.total;
      }
    },
    handleSizeChange(limit) {
      //修改参数
      this.limit = limit;
      this.getSkuList();
    },
    async sale(row) {
      //上架
      //   console.log(row.isSale);
      let result = await this.$API.sku.reqSale(row.id);
      if (result.code == 200) {
        row.isSale = 1; //改为1上架成功
        // console.log(row.isSale);
        this.$message({ type: "success", message: "上架成功" });
      }
    },
    async cancel(row) {
      // console.log(row.isSale);
      let res = await this.$API.sku.reqCancel(row.id);
      if (res.code == 200) {
        row.isSale = 0; // 下架成功， 处于下架状态，需要上架 显示上箭头
        this.$message({ type: "success", message: "下架成功" });
      }
    },
    async getSkuInfo(sku) {
      this.drawer = true;
      let res = await this.$API.sku.reqSkuById(sku.id);
      if (res.code == 200) {
        this.skuInfo = res.data;
      }
    },
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style scoped>
.el-row .el-col-5 {
  font-size: 18px;
  text-align: right;
}
.el-col {
  margin: 10px 10px;
}

 .el-carousel__button {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}
</style>
