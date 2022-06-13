<template>
    <div>
        <HeadTop head-title="在线实习" go-back="true"></HeadTop>
        <div>
            <router-link to='/'>返回首页</router-link>
        </div>
        <div>
            <router-link to='/u/login'>登录</router-link>
        </div>
        <div>
            <router-link to='/u/bindMobile'>绑定手机</router-link>
        </div>
    </div>
</template>

<script>
    import HeadTop from '@/components/header/Head'

    export default {
        name: "index",
        components: {
            HeadTop
        }
    }
</script>

<style scoped>

</style>