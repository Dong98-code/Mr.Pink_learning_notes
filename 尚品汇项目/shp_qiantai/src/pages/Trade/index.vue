<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>

    <div class="content">
      <!-- 收件人信息地方 -->
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="(user) in address"
        :key="user.id"
      >
        <span class="username" :class="{ selected: user.isDefault == '1' }">{{
          user.consignee
        }}</span>
        <p @click="changeDefault(user)">
          <span class="s1">{{ user.fullAddress }}</span>
          <span class="s2">{{ user.phoneNum }}</span>
          <span class="s3" v-show="user.isDefault == '1'">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <!-- 商品清单：购物车里面的数据 -->
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="(shop) in tradeInfo.detailArrayList"
          :key="shop.skuId"
        >
          <li>
            <img :src="shop.imgUrl" alt="" style="width: 100px" />
          </li>
          <li>
            <p>
              {{ shop.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ shop.orderPrice }}.00</h3>
          </li>
          <li>X{{ shop.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
          v-model="msg"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ tradeInfo.totalNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ tradeInfo.totalAmount }}.00</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:　<span>¥{{ tradeInfo.totalAmount }}.00</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ defaultUser.fullAddress }}</span>
        收货人：<span>{{ defaultUser.consignee }}</span>
        <span>{{ defaultUser.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <!-- 提交订单这里能用声明式导航吗? -->
      <a class="subBtn" @click="submitInfo">提交订单</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Trade",
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    // 组件挂载完毕 就去尝试获取 用户的地址信息
    this.getAddress();
    this.getShopInfo();
  },
  methods: {
    //获取用户地址信息
    getAddress() {
      this.$store.dispatch("trade/getAddress");
    },
    //获取商品清单的数据
    getShopInfo() {
      this.$store.dispatch("trade/getShopInfo");
    },
    //修改默认地址
    changeDefault(user) {
      //排他操作 先都设置为0，然后将点击的对应的 isDefault设置为1
      //全部用户信息isDefault = 0；
      this.address.forEach((item) => {
        item.isDefault = "0";
      });
      user.isDefault = "1";
    },
    //提交订单
    async submitInfo() {
      //整理参数:交易编码
      let tradeNo = this.tradeInfo.tradeNo;
      let data = {
        consignee: this.defaultUser.consignee, //付款人的名字
        consigneeTel: this.defaultUser.phoneNum, //付款人的手机号
        deliveryAddress: this.defaultUser.fullAddress, //付款人收货地址
        paymentWay: "ONLINE", //支付方式都是在线支付
        orderComment: this.msg, //买家留言
        orderDetailList: this.tradeInfo.detailArrayList, //购物车商品信息
      };

      //发请求:提交订单
      try {
        await this.$store.dispatch("trade/submitInfo", { tradeNo, data });
        //将来提交订单成功【订单ID生成】，路由跳转pay页面，进行支付
        this.$router.push({path:'/pay',query:{orderId:this.orderId}});
        
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    ...mapState({
      // state为最大的仓库　state.trade为对应的子仓库
      address: (state) => state.trade.address,
      tradeInfo: (state) => state.trade.tradeInfo,
      orderId:state=>state.trade.payId
    }),
    //默认收件人的信息计算出来
    defaultUser() {
      //find:数组的方法,找到复合条件的元素.回调需要返回布尔值【真|假】，真即为查找结果【如果多个结果都为真，取其中一个】
      return this.address.find((item) => item.isDefault == "1") || {};
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>