import Vue from 'vue'
import Vuex from 'vuex'
import {getDomBySelector} from '@/utils/utils'
Vue.use(Vuex)

const data = {
    state: {
        canvasStyleData: { // 页面全局数据
            width: 1200,
            height: 740,
            scale: 100,
            color: '#000',
            opacity: 1,
            background: '#fff',
            fontSize: 14,
        },
    },
    mutations: {
        getEditor(state) {
            state.editor = getDomBySelector('#editor')
        },
    },
    
}

export default new Vuex.Store(data)