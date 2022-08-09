const filterKeys = ['width', 'height', 'scale']
export function getCanvasStyle(canvasStyleData) {
    const result = {}
    Object.keys(canvasStyleData).filter(key => !filterKeys.includes(key)).forEach(key => {
        result[key] = canvasStyleData[key]
        if (key === 'fontSize') {
            result[key] += 'px' // 字体添加px
        }
    })

    return result
}

export function changeStyleWithScale(canvasStyleData) {
    // 通过宽高的设置 实现画布的缩放效果
    
}