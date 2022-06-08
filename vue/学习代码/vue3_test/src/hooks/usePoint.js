import { reactive, onMounted, onBeforeUnmount } from "vue";

function savePoint() {
    // 鼠标打点 相关数据
    let point = reactive({
        x: 0,
        y: 0,
    })

    // 方法
    function savePoint(e) {
        console.log(e.pageX, e.pageY);
        point.x = e.pageX;
        point.y = e.pageY;
    }
    // 生命周期钩子
    onMounted(() => {
        window.addEventListener("click", savePoint);
    })

    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    })
    return point
}

export default savePoint