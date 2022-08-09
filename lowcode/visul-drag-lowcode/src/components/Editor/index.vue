<template>
  <div  id="editor"
        class="editor"         
        :style="{
            ...getCanvasStyle(canvasStyleData),
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }">
    <!-- 网格线 -->
    <Grid/>
  </div>
</template>

<script>
import Grid from './Grid'
import Area from './Area'
import {mapState} from "vuex"
import {getCanvasStyle} from '@/utils/style'
import {changeStyleWithScale} from '@/utils/translate'
export default {
    components: {
        Grid, Area
    },
    props: {
        isEdit: {
            type: Boolean,
            default: true,
        },
    },
    computed: mapState(['canvasStyleData']),
    mounted() {
        this.$store.commit('getEditor')
        // let res = getCanvasStyle(this.canvasStyleData);
        // console.log(res);
    },
    methods: {
        getCanvasStyle, // 获得画布的基本样式， 设置
        changeStyleWithScale //通过这个函数 调整画布的宽高
    }

}
</script>

<style lang="scss" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}

</style>