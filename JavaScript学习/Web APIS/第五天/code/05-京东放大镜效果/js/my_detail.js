window.addEventListener('load', function () {
    let preview_img = document.querySelector('.preview_img');
    let mask = document.querySelector('.mask');
    let big = document.querySelector('.big');

    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 移动鼠标
    // 鼠标在盒子内的坐标

    preview_img.addEventListener('mousemove', function (e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;

        let maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        
        mask.style.left = maskX+ 'px';
        mask.style.top = maskY + 'px';

        // 大图片移动

        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        let bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        let bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        let bigX = maskX * bigMax / maskMax;
        let bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })
})