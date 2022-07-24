<template>
  <el-card id="header">
    <div slot="header">
      <div class="search-header">
        <span>线上热门搜索</span>
        <!-- 下拉框 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                    <lineChart title="搜索用户数" total="12321" growth="17.1"/>
            </el-col>
            <el-col :span="12">
                <lineChart title="人均搜索次数" total="2.7" growth="-26.2"/>
            </el-col>

        </el-row>
        <el-table style="width: 100%;margin-top:5px" border>
        <el-table-column label="排名" width="80" type="index">
        </el-table-column>
        <el-table-column label="搜搜关键字" width="180"> </el-table-column>
        <el-table-column label="用户数" sortable> </el-table-column>
        <el-table-column label="周涨幅" sortable> </el-table-column>
      </el-table>
      <!-- 分页去 -->
      <el-pagination layout="prev, pager, next" :total="1000" class="pagination"> </el-pagination>
    </div>
  </el-card>
</template>

<script>
import lineChart from './lineCharts'
export default {
  name: "Search",
  components:{
    lineChart
  },
  data() {
    return {
       
    }
  },
};
</script>

<style>
#header .el-card__header {
  border-bottom: 1px solid #eee;

}
.search-header {
  display: flex;
  justify-content: space-between;
}
.pagination{
  float: right;
}
</style>