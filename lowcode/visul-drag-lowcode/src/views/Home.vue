<template>
  <div class="home">
    <Toolbar/>
    <main>
        <!-- 左 -->
        <section class="left">组件列表</section>
        <!-- 中 -->
        <section class="center">
            <div class="content">画布</div>
        </section>
        <!-- 右 -->
        <section class="right">
            右侧属性列表
        </section>
    </main>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
export default {
    components:{Toolbar}
}
</script>

<style lang="scss">
.home {
    height: 100vh;
    background: #fff;
    main {
        height: calc(100% - 64px);
        position: relative;
        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            & > div {
                overflow: auto;
                &:first-child {
                    border-bottom: 1px solid #ddd;
                }
            }
        }
        .right {
            position: absolute;
            height: 100%;
            width: 288px;
            right: 0;
            top: 0;
        }
        .center {
            margin-left: 200px;
            margin-right: 288px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;
            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }
}
</style>

</style>