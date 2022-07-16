export const data = {
  "key": "v-5e3bb631",
  "path": "/base/server.html",
  "title": "开发服务器&自动化",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 下载包",
      "slug": "_1-下载包",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 配置",
      "slug": "_2-配置",
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
  "filePathRelative": "base/server.md"
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
