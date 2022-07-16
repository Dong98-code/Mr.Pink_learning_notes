export const data = {
  "key": "v-499655ae",
  "path": "/base/other.html",
  "title": "处理其他资源",
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
  "git": {
    "contributors": [
      {
        "name": "xiongjian",
        "email": "webjsforyou@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "base/other.md"
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
