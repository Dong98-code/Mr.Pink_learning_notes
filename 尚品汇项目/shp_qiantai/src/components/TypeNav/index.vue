<template>
  <div class="type-nav">
    <!-- <h1>{{categoryList}}</h1> -->
    <div class="container">
      <div @mouseleave="resetIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item bo"
              v-for="(c1, index) in categoryList.slice(0, 16)"
              :key="c1.categoryId"
              :class="{ cur: curIndex === index }"
            >
              <h3 @mouseenter="changeBackgroundColor(index)">
                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
              </h3>
              <!-- 二三级分类 -->
              <div class="item-list clearfix">
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="c3 in c2.categoryChild"
                        :key="c3.categoryChild"
                      >
                        <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
export default {
  name: "TypeNav",
  // 挂载完毕 就发请求
  data() {
    return {
      curIndex: -1,
    };
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
  computed: {
    // 传入对象形式的参数， 右侧需要为一个函数， 该函数自动执行
    ...mapState({
      categoryList: (state) => {
        // console.log(state);
        return state.home.categoryList;
      },
    }),
  },
  methods: {

    // changeBackgroundColor(index) {
    //   // 注意this
    //   this.curIndex = index;
    // },
    changeBackgroundColor: throttle(function(index){
      this.curIndex = index;
    }, 50),
    resetIndex() {
      // 鼠表移除
      this.curIndex = -1;
    },
    goSearch(event) {
      // 路由跳转 参数传递
      // 获取自定义属性和属性值
      let el = event.target;
      let {categoryname, category1id, category2id, category3id} = el.dataset;
      if (categoryname) {
        // 带有dategoryName的才是 a标签
        // 整理路由跳转参数
        let location = {name:'search'}
        let query = {categoryname:categoryname}
        if (category1id) {
          // 1级标
          query.category1id = category1id
        } else if (category2id) {
          // 2级标签
          query.category2id = category2id

        } else {
          category3id
          query.category2id = category2id

        }
        location.query = query
        this.$router.push(location); //跳转
      }
    }
  },
};
</script>

<style scope lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>