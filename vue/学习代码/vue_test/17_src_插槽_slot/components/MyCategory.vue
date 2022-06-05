<template>
    <div class="category">
        <h3>{{title}}</h3>
        
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"MyCategory",
    props:['title']
}
</script>

<style>
    .category {
        width: 200px;
        height: 300px;
        background-color: pink;
    }
    h3 {
        text-align: center;
        background-color: skyblue;
    }
</style>