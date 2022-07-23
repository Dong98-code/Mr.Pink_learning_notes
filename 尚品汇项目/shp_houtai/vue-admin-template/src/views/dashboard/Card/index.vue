<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售" count="￥ 126560">
            <!-- 使用具名插槽 -->
            <template slot="charts">
              <span>周同比&nbsp;&nbsp;56.67%</span>
              <span class="el-icon-caret-top" style="color: green"></span>
              &nbsp;&nbsp;
              <span>日同比&nbsp;&nbsp;19.16%</span>
              <span class="el-icon-caret-bottom" style="color: red"></span>
            </template>
            <template slot="footer">
              <span>日销售额￥ 12423</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="88460">
            <!-- 使用具名插槽 -->
            <template slot="charts">
              <lineChart/>
            </template>
            <template slot="footer">
              <span>日访问量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="88460">
            <!-- 使用具名插槽 -->
            <template slot="charts">
              <barChart/>
            </template>
            <template slot="footer">
              <span>转化率 65%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="78%">
            <!-- 使用具名插槽 -->
            <template slot="charts">
              <progressChart/>
            </template>
            <template slot="footer">
              <span>周同比&nbsp;&nbsp;12%</span>
              <span class="el-icon-caret-top" style="color: green"></span>
              &nbsp;&nbsp;
              <span>日同比&nbsp;&nbsp;11%</span>
              <span class="el-icon-caret-bottom" style="color: red"></span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineChart from "./lineCharts"
import barChart from "./barCharts"
import progressChart from "./progressCharts"
export default {
  components: {
    Detail,
    lineChart,
    barChart,
    progressChart
  },
};
</script>

<style>
</style>