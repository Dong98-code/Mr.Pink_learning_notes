<template>
  <div class="area"
  :style="{
        left:start.x +'px',
        top:start.y + 'px',
        width: width + 'px',
        height:Height + 'px'
    }">
    
  </div>
</template>

<script>
export default {
    props: {
        start:{
            type:Object,
            default: () => {} // 传入的是组件的起始位置信息
        },
        width: {
            type:Number,
            default:0
        },
        Height: {
            type:Number,
            default:0
        }
    }
}
</script>

<style lang="scss" scoped>
.area {
    border: 1px solid skyblue;
    position: absolute;
}
</style>