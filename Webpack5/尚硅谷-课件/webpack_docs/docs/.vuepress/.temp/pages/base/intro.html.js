export const data = {
  "key": "v-c138b05c",
  "path": "/base/intro.html",
  "title": "基本使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "功能介绍",
      "slug": "功能介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "开始使用",
      "slug": "开始使用",
      "children": [
        {
          "level": 3,
          "title": "1. 资源目录",
          "slug": "_1-资源目录",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 创建文件",
          "slug": "_2-创建文件",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 下载依赖",
          "slug": "_3-下载依赖",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 启用 Webpack",
          "slug": "_4-启用-webpack",
          "children": []
        },
        {
          "level": 3,
          "title": "5. 观察输出文件",
          "slug": "_5-观察输出文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "base/intro.md"
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
