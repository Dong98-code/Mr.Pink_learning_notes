window.addEventListener('load', function () {
    // 获取元素
    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;

    
    // 鼠标经过focus 显示左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 鼠标放上去 停止 定时器；
        clearInterval(timer);
        timer = null;  // 清除timer 变成null
    })

    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    // 根据几张图生成小圆圈
    let ul = focus.querySelector('ul');
    // console.log(ul.children.length);
    let ol = focus.querySelector('.circle');

    for (let i = 0; i < ul.children.length; i++) {
        //创建Li
        //插入
        // index
        let li = document.createElement('li');
        // 设置属性index
        li.setAttribute('index', i);
        // console.log(li);

        ol.appendChild(li);

        // 点击 current
        li.addEventListener('click', function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
        
            this.className = 'current';

            // 点击小圆圈 切换到当前图片
            // ul 移动 
            // 移动距离，小圆圈的索引号 * 每个图片的距离；
            let index = this.getAttribute('index');
            circle_num = index;

            animate(ul, -index * focusWidth);
        })

        

    }
    // 设置current
    ol.children[0].className = 'current';
    // 点击一次图片滚动一次
    // 克隆第一张图片
    let first = ul.children[0].cloneNode(true); // 深拷贝

    ul.append(first)
    let num = 0;
    let circle_num = 0;
    let flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
                // 在最右侧的时候 此时的ul 快速讲left 变成0
            
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            })
            circle_num++;

            if (circle_num == ol.children.length) {
                circle_num = 0;
            }
            circleChange();
        }
        
    })

    // 左侧按钮
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            
            // 在最左侧的时候 此时的ul 快速讲left 变成最右侧
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
                
            }
            // 点击一次num - 1
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            })
            circle_num--;
            
            circle_num = circle_num < 0 ? ol.children.length - 1 : circle_num;
            circleChange();
        }
    })

    
    function circleChange() {
        // 清除小圆圈的类名
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        
        ol.children[circle_num].className = 'current';

    }
    // 定时器 自动播放
    let timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
})

