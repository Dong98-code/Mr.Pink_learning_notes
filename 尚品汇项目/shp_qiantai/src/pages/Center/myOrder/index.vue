<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <!--展示订单的地方-->
      <div class="orders">
        <!--遍历我们的订单数据-->
        <table class="order-item" v-for="(order) in  list" :key="order.id">
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >{{order.createTime}}　订单编号：{{order.outTradeNo}}
                  <span class="pull-right delete"
                    ><img src="../images/delete.png" /></span
                ></span>
              </th>
            </tr>
          </thead>
          <tbody>
             <!-- 每一笔订单展示购买商品的地方 -->
            <tr v-for="(cart,index) in order.orderDetailList" :key="index">
              <td width="60%">
                <div class="typographic">
                  <img :src="cart.imgUrl" style="width:100px;height:100px"/>
                  <a class="block-text">{{cart.skuName}}</a>
                  <span>x{{cart.skuNum}}</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td :rowspan="order.orderDetailList.length" v-show="index==0" width="8%" class="center">{{order.consignee}}</td>
              <td :rowspan="order.orderDetailList.length" v-show="index==0" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{order.totalAmount}}.00</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td :rowspan="order.orderDetailList.length" v-show="index==0" width="8%" class="center">
                <a href="#" class="btn">{{order.orderStatusName}}</a>
              </td>
              <td :rowspan="order.orderDetailList.length"  v-show="index==0" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
             <!-- 全局组件分页器：
                total:分页器一共要展示多少条数据
                pageSize:一页展示几条数据
                pageNo:当前页码
                pagerCount:连续页码数
                currentPage:自定义事件父组件获取分页器当前页码

              -->
             <Pagination
              :total="total"
              :pageSize="limit"
              :pageNo="page"
              :continues="9"
              @currentPage="currentPage"
            ></Pagination>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="like">
      <h4 class="kt">猜你喜欢</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike01.png" />
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike02.png" />
          </div>
          <div class="attr">Apple苹果iPhone 6s/6s Plus 16G 64G 128G</div>
          <div class="price">
            <em>¥</em>
            <i>4388.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike03.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike04.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //收集的是当前页码数
      page: 1,
      //收集的是一页几条数据
      limit: 3,
      //存储我的订单数据
      list:[],
      //分页器一共展示多少条数据
      total:0
    };
  },
  mounted() {
    //组件挂载完毕先获取一次我的订单的数据
    this.getData();
  },
  methods: {
    //获取我的订单数据的方法
    async getData() {
      //获取我的订单的数据:page|limit
      const { page, limit } = this;
      let result = await this.$http.reqMyOrderList(page, limit);
      if (result.code == 200) {
          this.list = result.data.records;
          this.total = result.data.total;
      }
    },
    //获取用户点击当前页码的自定义事件的回调
    currentPage(page){
        //修改参数
        this.page = page;
        this.getData();
    }
  },
};
</script>

<style scoped>
</style>
