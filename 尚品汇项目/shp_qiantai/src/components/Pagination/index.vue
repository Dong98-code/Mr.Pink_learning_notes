<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageInfo', pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.startPage> 1" @click="$emit('getPageInfo', 1)">1</button>
    <button v-show="startNumAndEndNum.startPage > 2">···</button>

    <button v-for="page in startNumAndEndNum.endPage" :key="page" :class="{active:pageNo==page}" v-show="page >= startNumAndEndNum.startPage" @click="$emit('getPageInfo', page)">{{ page }}</button>

    <button>···</button>
    <button :disabled="pageNo==totalPage" @click="$emit('getPageInfo', pageNo+1)">下一页</button>
    <button>共{{totalPage}}页</button>
    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      // 起始数字和结束数字
      // 连续页码数字
      const { pageNo, pageSize, totalPage, continues } = this;
      let startPage = 0,
        endPage = 0;
      // 1. 连续页 > 总页数
      if (continues > totalPage) {
        startPage = 0;
        endPage = totalPage; //结束页的总页数
      }
      // 连续页
      startPage = pageNo - Math.floor(continues / 2);
      endPage = pageNo + Math.floor(continues / 2);
      if (startPage < 1) {
        startPage = 1;
        endPage = continues;
      }
      if (endPage > totalPage) {
        endPage = totalPage;
        startPage = endPage - continues + 1;
      }
      return { startPage, endPage };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
