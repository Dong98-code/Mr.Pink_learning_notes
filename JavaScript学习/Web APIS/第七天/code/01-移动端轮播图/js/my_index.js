window.addEventListener('load', function () {
    let focus = document.querySelector('.focus');
    let ul = focus.children[0];
    let ol = focus.children[1];

    // focus 宽度
    let w = focus.offsetWidth;
    let index = 0
    let timer = setInterval(function () {
        // let index = 0;
        index++;
        let translatex = -index * w;
        ul.style.transform = 'translateX(' + translatex + 'px)';
        ul.style.transition = 'all .3s'; // 过度效果
        
    }, 2000)

    // 无缝滚动

    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;

            // 去掉 transition
            ul.style.transition = 'none';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';

        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        // 小圆点跟随变化
        // 选出 之前 的 带有 current 选中， 去掉
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })

    // 手指滑动轮播图；
    let startX = 0;
    let moveX = 0;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // 停止计时器‘
        clearInterval(timer);
    })

    // flag 表示手指是否移动过；
    let flag = false;
    // 计算手指拖动的距离
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        translatex = -index * w + moveX;
        // 去掉过度效果
        ul.style.transition = 'none';

        ul.style.transform = 'translateX(' + translatex + 'px)';

        flag = true;

        e.preventDefault();
        
    })

    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                let translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        // 先清除之前的定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            let translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });

    // 返回顶部模块制作
    let goBack = document.querySelector('.goBack');
    let nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})