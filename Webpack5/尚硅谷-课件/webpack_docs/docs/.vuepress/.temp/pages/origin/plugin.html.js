export const data = {
  "key": "v-2d7562d6",
  "path": "/origin/plugin.html",
  "title": "Plugin 原理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Plugin 的作用",
      "slug": "plugin-的作用",
      "children": []
    },
    {
      "level": 2,
      "title": "Plugin 工作原理",
      "slug": "plugin-工作原理",
      "children": []
    },
    {
      "level": 2,
      "title": "Webpack 内部的钩子",
      "slug": "webpack-内部的钩子",
      "children": [
        {
          "level": 3,
          "title": "什么是钩子",
          "slug": "什么是钩子",
          "children": []
        },
        {
          "level": 3,
          "title": "Tapable",
          "slug": "tapable",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Plugin 构建对象",
      "slug": "plugin-构建对象",
      "children": [
        {
          "level": 3,
          "title": "Compiler",
          "slug": "compiler",
          "children": []
        },
        {
          "level": 3,
          "title": "Compilation",
          "slug": "compilation",
          "children": []
        },
        {
          "level": 3,
          "title": "生命周期简图",
          "slug": "生命周期简图",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "开发一个插件",
      "slug": "开发一个插件",
      "children": [
        {
          "level": 3,
          "title": "最简单的插件",
          "slug": "最简单的插件",
          "children": []
        },
        {
          "level": 3,
          "title": "注册 hook",
          "slug": "注册-hook",
          "children": []
        },
        {
          "level": 3,
          "title": "启动调试",
          "slug": "启动调试",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "BannerWebpackPlugin",
      "slug": "bannerwebpackplugin",
      "children": []
    },
    {
      "level": 2,
      "title": "CleanWebpackPlugin",
      "slug": "cleanwebpackplugin",
      "children": []
    },
    {
      "level": 2,
      "title": "AnalyzeWebpackPlugin",
      "slug": "analyzewebpackplugin",
      "children": []
    },
    {
      "level": 2,
      "title": "InlineChunkWebpackPlugin",
      "slug": "inlinechunkwebpackplugin",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "xiongjian",
        "email": "webjsforyou@gmail.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "origin/plugin.md"
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
