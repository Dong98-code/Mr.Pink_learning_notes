export const data = {
  "key": "v-63b9ef10",
  "path": "/intro/code.html",
  "title": "项目代码",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "项目基础模板",
      "slug": "项目基础模板",
      "children": []
    },
    {
      "level": 2,
      "title": "项目目录文件介绍",
      "slug": "项目目录文件介绍",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "intro/code.md"
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
