import store from '@/store'
import { divide, multiply } from 'mathjs'
// 
export function changeStyleWithScale(value) {
    return multiply(value, divide(parseInt(store.state.canvasStyleData.scale), 100))
}