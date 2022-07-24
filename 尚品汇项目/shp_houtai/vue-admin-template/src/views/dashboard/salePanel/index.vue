<template>
  <el-card class="box-card" style="margin: 10px 0px">
    <div slot="header" class="clearfix">
      <!-- 头部左侧 -->
      <el-tabs v-model="activeName" class="tab">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visited"></el-tab-pane>
      </el-tabs>
      <!-- 右侧 -->
      <div class="header-right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <el-date-picker
          class="date"
          v-model="date"
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
        <el-col :span="20">
          <!-- 容器 -->
          <div class="charts" ref="charts"></div>
        </el-col>
        <el-col :span="4">
          <h3>门店{{ title }}排名</h3>
          <ul class="order">
            <li v-for="(item, index) in rankList" :key="index">
              <!-- <span :class="item.no<3?'reindex':''">{{item.no}}</span> -->
              <span :class="item.no<=3?'rindex':'rindex2'">{{item.no}}</span>

              <span>{{item.name}}</span>
              <span class="rvalue">{{item.money}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import dayjs from "dayjs";
import { mapState } from "vuex";
import * as echarts from "echarts";
export default {
  name: "salePanel",
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      date:[],
      rankList:[]
    };
  },
  mounted() {
    //初始化echarts实例
    this.mycharts = echarts.init(this.$refs.charts);
    //配置数据
    this.mycharts.setOption({
      title: {
        text: this.title + "趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [],
          color: "yellowgreen",
        },
      ],
    });

    //顶部是mounted：为什么第一次没有数据，没有数据因此不显示
  },
  //   计算属性
  computed: {
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
    ...mapState({
      listState: (state) => state.home.list,
    }),
  },
  watch: {
    title() {
      // console.log("修改配置数据");
      //重新修改图标的配置数据
      //图标配置数据可以再次修改，如果有新的数值，新的数值，没有新的数值，还是用以前的
      this.mycharts.setOption({
        title: {
          text: this.title,
        },
        xAxis: {
          data:
            this.title == "销售额"
              ? this.listState.orderFullYearAxis
              : this.listState.userFullYearAxis,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data:
              this.title == "销售额"
                ? this.listState.orderFullYear
                : this.listState.userFullYear,
            color: "yellowgreen",
          },
        ],
      });
      this.rankList = this.title == "销售额" ? this.listState.orderRank : this.listState.userRank
    },
    listState() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.listState.orderFullYearAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: this.listState.orderFullYear,
            color: "skyblue",
          },
        ],
      });
      this.rankList = this.listState.orderRank
    },
  },
  methods: {
    //本天
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.date = [day, day];
    },
    //本周
    setWeek() {
      const start = dayjs().day(1).format("YYYY-MM-DD");
      const end = dayjs().day(7).format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本月
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本年
    setYear() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    
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
.charts {
  width: 100%;
  height: 300px;
}
.order {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}
.order li {
  height: 8%;
  margin: 10px 0px;
}

.order li span:nth-child(2) {
  margin-left: 20px;
}
.rindex {
  float: left;
  border-radius: 50%;
  background: black;
  color: white;
  text-align: center;
  width: 20px;
  height: 20px;
}
.rindex2 {
  float: left;
  border-radius: 50%;
  background: white;
  color: black;
  text-align: center;
  width: 20px;
  height: 20px;
}
.rvalue {
  float: right;
}
</style>