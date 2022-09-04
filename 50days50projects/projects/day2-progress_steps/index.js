let progress = document.getElementById('progress')

let circles = document.querySelectorAll('.circle')

let prev = document.getElementById("prev")

let next = document.getElementById("next")

let curActive = 1; // 默认的激活的圈圈为1
next.addEventListener('click', () => {
    curActive += 1;
    if (curActive > circles.length) {
        curActive = circles.length;
    }
   update()
})

prev.addEventListener('click', () => {
    curActive -= 1;
    if (curActive < 1) {
        curActive += 1;
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < curActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // 通过设置 progress的长度来实现效果
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
    // 控制按钮 的显示
    if(curActive === 1) {
        prev.disabled = true
    } else if(curActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}