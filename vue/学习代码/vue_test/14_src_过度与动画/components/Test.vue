<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition :appear="true">
            <h1 v-show="isShow">你好啊</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:"TestOne",
    data(){
        return {
            isShow:true,
        }
    }
}
</script>

<style scoped>
    h1 {
        background-color: pink;
    }
    .v-enter-active {
        animation:xdd 1s linear;
    }

    .v-leave-active {
        animation:xdd 1s linear reverse;
    }
    @keyframes xdd {
        from{
            transform: translateX(-100%);
        }
        to {
            transform: translate(0px);
        }
    }
</style>