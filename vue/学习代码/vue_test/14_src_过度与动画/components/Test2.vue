<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition-group name="hello" :appear="true">
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">不好</h1>

        </transition-group>
    </div>
</template>

<script>
export default {
    name:"TestTwo",
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
    .hello-enter, .hello-leave-to {
        transform: translate(-100%);
    }
    .hello-leave, .hello-enter-to {
        transform: translate(0px);
    }
    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }
    
</style>