$(function () {
   // 显示 隐藏 电梯导航
    // 点击li 不执行 页面滚动 事件lI的背景选择 tianjia current
    let flag = true;
    let toolTop = $(".recommend").offset().top;

    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function () {
       // 页面滚动 到某一个区域 左侧电梯导航 小li响应添加和删除 curren类名；
        
       if (flag) {
           $(".floor .w").each(function (i, ele) {
               if ($(document).scrollTop() >= $(ele).offset().top) {
                   // console.log(i);
                   $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

               }
           });
    }
    });

    $(".fixedtool li").click(function() {
        flag = false;
        // console .log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        let current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current // current 为目标位置
        }, function() {
            flag = true;
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
});