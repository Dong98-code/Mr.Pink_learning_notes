export const data = {
  "key": "v-5a4f3333",
  "path": "/base/output.html",
  "title": "修改输出资源的名称和路径",
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
      "title": "2. 修改 index.html",
      "slug": "_2-修改-index-html",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 运行指令",
      "slug": "_3-运行指令",
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
  "filePathRelative": "base/output.md"
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
