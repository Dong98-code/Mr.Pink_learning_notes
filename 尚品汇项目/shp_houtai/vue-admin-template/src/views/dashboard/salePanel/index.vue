<template>
  <el-card class="box-card" style="margin: 10px 0px">
    <div slot="header" class="clearfix">
      <!-- 头部左侧 -->
      <el-tabs v-model="activeName" class="tab">
        <el-tab-pane label="销售额" name="销售额"></el-tab-pane>
        <el-tab-pane label="访问量" name="访问量"></el-tab-pane>
      </el-tabs>
      <!-- 右侧 -->
      <div class="header-right">
        <span>今日</span>
        <span>本周</span>
        <span>本年</span>
        <span>本月</span>
        <el-date-picker
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          size="mini"
        >
        </el-date-picker>
  

      </div>
    </div>
    <div>
        <el-row :gutter="10">
            <el-col :span="18">
                销售额趋势
            </el-col>
            <el-col :span="6">
                门店销售额排名
            </el-col>

        </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "salePanel",
  data() {
    return {
      activeName: "销售额",
    };
  },
};
</script>

<style>
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.date {
  /* width: 200; */
  margin: 0px 20px;
}
.header-right {
  position: absolute;
  right: 0px;
}
.header-right span {
  padding: 0 10px;
  font-size: 14px;
}
</style>