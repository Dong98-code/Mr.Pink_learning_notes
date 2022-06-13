<template>
    <header>
        <div class="nav-left" v-if="goBack" @click="goBackDo"><i class="iconfont icon-left-arrow"></i></div>
        <div class="header-tit ellipsis" s v-if="headTitle">{{headTitle}}</div>
    </header>
</template>

<script>
    export default {
        name: "head-top",
        data(){
            return{

            }
        },
        props:['headTitle', 'goBack'],
        methods: {
            goBackDo() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";

    header {
        width: 100%;
        position: relative;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background: #ffffff;
        .nav-left{
            position: absolute;
            bottom: 0;
            font-size: 14px;
            cursor: pointer;
            left:16px;
        }
        .header-tit{
            max-width: 60%;
            margin: 0 auto;
            color: #323233;
            font-weight: 500;
            font-size: 14px;
        }
    }
</style>