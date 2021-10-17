window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        // console.log("获得图片");
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })


// 鼠标移动， 让黄色的盒子跟着鼠标走
    preview_img.addEventListener('mousemove', function (e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        maskX = maskX >= 0 ? maskX : 0;
        maskX = maskX >= preview_img.offsetWidth - mask.offsetWidth ? preview_img.offsetWidth - mask.offsetWidth : maskX;
        maskY = maskY >= 0 ? maskY : 0;
        maskY = maskY >= preview_img.offsetHeight - mask.offsetHeight ? preview_img.offsetHeight - mask.offsetHeight : maskY;
        mask.style.left = maskX  + 'px';
        mask.style.top = maskY + 'px';

    })
})