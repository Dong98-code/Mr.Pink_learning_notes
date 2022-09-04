let search = document.querySelector('.search')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    // toggle如果标记存在则 删除给定的标记，返回fasle
    //不存在 则添加 对应的 标记， 返回true
    search.classList.toggle('active')
    input.focus() // input获取焦点
})