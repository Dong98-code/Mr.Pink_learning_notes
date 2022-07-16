export const data = {
  "key": "v-1cfd2df6",
  "path": "/origin/loader.html",
  "title": "Loader 原理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "loader 概念",
      "slug": "loader-概念",
      "children": []
    },
    {
      "level": 2,
      "title": "loader 执行顺序",
      "slug": "loader-执行顺序",
      "children": []
    },
    {
      "level": 2,
      "title": "开发一个 loader",
      "slug": "开发一个-loader",
      "children": [
        {
          "level": 3,
          "title": "1. 最简单的 loader",
          "slug": "_1-最简单的-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "2. loader 接受的参数",
          "slug": "_2-loader-接受的参数",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "loader 分类",
      "slug": "loader-分类",
      "children": [
        {
          "level": 3,
          "title": "1. 同步 loader",
          "slug": "_1-同步-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 异步 loader",
          "slug": "_2-异步-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "3. Raw Loader",
          "slug": "_3-raw-loader",
          "children": []
        },
        {
          "level": 3,
          "title": "4. Pitching Loader",
          "slug": "_4-pitching-loader",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "loader API",
      "slug": "loader-api",
      "children": []
    },
    {
      "level": 2,
      "title": "手写 clean-log-loader",
      "slug": "手写-clean-log-loader",
      "children": []
    },
    {
      "level": 2,
      "title": "手写 banner-loader",
      "slug": "手写-banner-loader",
      "children": []
    },
    {
      "level": 2,
      "title": "手写 babel-loader",
      "slug": "手写-babel-loader",
      "children": []
    },
    {
      "level": 2,
      "title": "手写 file-loader",
      "slug": "手写-file-loader",
      "children": []
    },
    {
      "level": 2,
      "title": "手写 style-loader",
      "slug": "手写-style-loader",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "xiongjian",
        "email": "webjsforyou@gmail.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "origin/loader.md"
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
