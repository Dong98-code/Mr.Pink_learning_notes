export const data = {
  "key": "v-65441bad",
  "path": "/base/1.html",
  "title": "基本配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "5 大核心概念",
      "slug": "_5-大核心概念",
      "children": []
    },
    {
      "level": 2,
      "title": "准备 Webpack 配置文件",
      "slug": "准备-webpack-配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "修改配置文件",
      "slug": "修改配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "base/1.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
