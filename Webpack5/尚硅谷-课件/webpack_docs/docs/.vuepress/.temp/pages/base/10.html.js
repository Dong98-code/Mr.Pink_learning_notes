export const data = {
  "key": "v-43725e55",
  "path": "/base/10.html",
  "title": "自动清空上次打包资源",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 配置",
      "slug": "_1-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 运行指令",
      "slug": "_2-运行指令",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "base/10.md"
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
