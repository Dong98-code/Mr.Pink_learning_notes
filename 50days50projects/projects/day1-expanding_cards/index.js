let panels = document.querySelectorAll('.panel')
// 先去掉active类名 然后给点击的那个盒子添加一个类名active

function removeActiveClassName() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassName();
        panel.classList.add('active')
    })
})