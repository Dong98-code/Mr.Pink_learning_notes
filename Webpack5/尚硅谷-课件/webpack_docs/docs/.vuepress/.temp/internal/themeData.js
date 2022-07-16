export const themeData = {
  "logo": "/imgs/favicon.ico",
  "lastUpdated": false,
  "navbar": [
    {
      "text": "课程介绍",
      "link": "/intro/"
    },
    {
      "text": "基础",
      "link": "/base/"
    },
    {
      "text": "高级",
      "link": "/senior/"
    },
    {
      "text": "项目",
      "link": "/project/"
    },
    {
      "text": "原理",
      "link": "/origin/"
    }
  ],
  "sidebar": {
    "/intro/": [
      {
        "text": "课程介绍",
        "children": [
          "/intro/README.md",
          "/intro/pre.md",
          "/intro/group.md",
          "/intro/learn.md",
          "/intro/asset.md"
        ]
      }
    ],
    "/base/": [
      {
        "text": "基础配置",
        "children": [
          "/base/README.md",
          "/base/base.md",
          "/base/config.md",
          "/base/development.md",
          "/base/css.md",
          "/base/image.md",
          "/base/output.md",
          "/base/clean.md",
          "/base/font.md",
          "/base/other.md",
          "/base/javascript.md",
          "/base/html.md",
          "/base/server.md",
          "/base/production.md",
          "/base/optimizeCss.md",
          "/base/minifyHtml.md",
          "/base/summary.md"
        ]
      }
    ],
    "/senior/": [
      {
        "text": "高级优化",
        "children": [
          "/senior/README.md",
          "/senior/enhanceExperience.md",
          "/senior/liftingSpeed.md",
          "/senior/reduceVolume.md",
          "/senior/optimizePerformance.md",
          "/senior/summary.md"
        ]
      }
    ],
    "/project/": [
      {
        "text": "项目配置",
        "children": [
          "/project/README.md",
          "/project/react-cli.md",
          "/project/vue-cli.md",
          "/project/summary.md"
        ]
      }
    ],
    "/origin/": [
      {
        "text": "原理分析",
        "children": [
          "/origin/README.md",
          "/origin/loader.md",
          "/origin/plugin.md",
          "/origin/summary.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
