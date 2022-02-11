(function flexible(window, document) {
    // 获取根元素
    var docEl = document.documentElement
    // 物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            // 移动端 24px body字体大小；
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面没有body，等到 主要内容加载完毕之后，再去执行该函数
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    // 设置 rem 大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize 页面尺寸变化
    //页面大小发生变化
    window.addEventListener('resize', setRemUnit)
    // pageshow 页面重现加载
    window.addEventListener('pageshow', function (e) {
        // 页面 从缓存中取出，仍然重新 设置rem
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))