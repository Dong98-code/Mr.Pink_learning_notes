<template>
  <div>
    <div class="header">
        <span class="search-header">{{title}}</span>
        <span class="el-icon-info"></span>
        
    </div>
    <div class="main">
        <span class="main-title">{{total}}</span>
        <span class="main-content">{{growth}}</span>
        <span class="el-icon-caret-top" v-show="growth>0"></span>
        <span class="el-icon-caret-bottom" v-show="growth<0"></span>

    </div>
    <div class="footer">
        <!-- 容器用于绘画 -->
        <div class="charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: '',
   mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      yAxis: {
        //隐藏y轴
        show: false,
      },
      //系列
      series: [
        {
          type: "line",
          data: [10, 7, 33, 12, 48, 9,29,10,44],
          //拐点的样式的设置
          itemStyle: {
            opacity: 0,
          },
          //线条的样式
          lineStyle: {
            color: "blue",
          },
          //填充颜色设置
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "blue", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
  props:['title', 'total', 'growth'],
}

</script>

<style scoped>
.header {
    display: flex;
    justify-content: flex-start;
}

.search-header {
    color: gray;
    margin-right: 20px;
}
.header .el-icon-info {
    color: gray;
}
.main{
  margin: 10px 0px ;
}
.main .el-icon-caret-top{
    color: red;
}
.main .el-icon-caret-bottom{
    color: green;
}
.main-title{
  margin-right: 30px;
}
.main-content{
  margin-right: 10px;
  font-size: 12px;
  color: gray;
}
.charts{
  width: 100%;
  height: 50px;
}
</style>