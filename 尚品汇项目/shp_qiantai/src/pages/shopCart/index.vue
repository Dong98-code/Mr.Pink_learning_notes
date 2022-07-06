<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart) in cartInfoList"
          :key="cart.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              @change="changeChecked(cart, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">
              {{ cart.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="minusSkuNum(cart)">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @input="changeSkuNum(cart, $event)"
            />
            <a @click="addSkuNum(cart)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <!-- 单价*个数 -->
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCartById(cart)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          @change="updateAllChecked($event)"
          :checked="isCartChecked && cartInfoList.length>0"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ cartInfoList.length }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
         <!-- 路由跳转:没有任何业务逻辑,声明式、编程式导航都可以 -->
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//按需引入lodash节流函数
import throttle from "lodash/throttle";
//按需引入lodash防抖函数
import debounce from "lodash/debounce";
export default {
  name: "ShopCart",
  //组件挂载完毕,获取购物车的数据
  mounted() {
    //获取购物车的数据
    this.getData();
  },
  computed: {
    ...mapGetters({CartInfo:"shopcart/CartInfo"}),
    //购物车的数据
    cartInfoList() {
      return this.CartInfo.cartInfoList || [];
    },
    //购物车商品总价
    totalPrice() {
      return this.cartInfoList.reduce((a, b) => a + b.skuPrice * b.skuNum, 0);
    },
    isCartChecked(){
       //购物车里面的数据进行过滤(勾选)，如果勾选的商品与购物车商品总数相等。全选勾选！相反不够！！！
       return this.cartInfoList.filter(item=>item.isChecked=='1').length===this.cartInfoList.length;
    }
  },
  methods: {
    //获取购物车的数据请求函数
    getData() {
      this.$store.dispatch("shopcart/getShopCart");
    },
    //修改商品数据->加的操作
    async addSkuNum(cart) {
      //整理参数
      let params = { skuId: cart.skuId, skuNum: 1 };
      //发请求:通知服务器修改当前商品的个数
      //再次获取购物车的最新的数据：保证这次修改数据完毕【成功以后在获取购物车数据】
      try {
        //修改商品个数成功
        await this.$store.dispatch("detail/addorUpdateSku", params);
        //再次获取最新的购物车的数据
        this.getData();
      } catch (error) {
        alert("修改数量失败");
      }
    },
    //修改商品数据-减的操作
    minusSkuNum: throttle(async function (cart) {
      if (cart.skuNum > 1) {
        //整理参数:至少加入购物车的数量最低1个
        let params = { skuId: cart.skuId, skuNum: -1 };
        //修改商品的数据
        try {
          //修改商品的个数、成功以后再次获取购物车的数据
          await this.$store.dispatch("detail/addorUpdateSku", params);
          this.getData();
        } catch (error) {}
      }
    }, 2000),
    changeSkuNum: debounce(async function (cart, e) {
      //整理参数
      let params = { skuId: cart.skuId };
      //计算出SkuNum携带的数据
      let userResultValue = e.target.value * 1;
      //用户输入完毕，最终结果【非法条件】
      if (isNaN(userResultValue) || userResultValue < 1) {
        params.skuNum = 0;
      } else {
        //正常情况
        params.skuNum = parseInt(userResultValue) - cart.skuNum;
      }
      //发请求：修改商品的个数
      try {
        //修改商品的个数、成功以后再次获取购物车的数据
        await this.$store.dispatch("detail/addorUpdateSku", params);
        this.getData();
      } catch (error) {}
    }, 500),
    //删除某一个商品
    async deleteCartById(cart) {
      //整理参数
      let skuId = cart.skuId;
      try {
        //删除商品成功
        await this.$store.dispatch("shopcart/deleteCartById", skuId);
        //再次获取购物车最新的数据
        this.getData();
      } catch (error) {
        alert("删除失败");
      }
    },
    //修改某一个商品的勾选的状态
    async changeChecked(cart, e) {
      //整理参数
      let params = {
        skuId: cart.skuId,
        isChecked: e.target.checked ? "1" : "0",
      };
      //发请求:修改商品的勾选的状态
      try {
        await this.$store.dispatch("shopcart/changeChecked", params);
        this.getData();
      } catch (error) {}
    },
    //全选的业务
    async updateAllChecked(e) {
      //获取全选的复选框勾选的状态,接口需要的1|0
      let isChecked = e.target.checked ? "1" : "0";
      try {
        //await等待成功:购物车全部商品勾选状态成功以后
        await this.$store.dispatch("shopcart/allUpdateChecked", isChecked);
        this.getData();
      } catch (error) {
        alert('修改失败');
      }
    },
    //删除选中的商品
    async deleteAllCart(){
       try {
         //等待全部勾选商品删除以后
         await  this.$store.dispatch('shopcart/deleteAllCart');
         //再次获取购物车的数据
         this.getData();
       } catch (error) {
         alert('删除失败');
       }
    }
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>