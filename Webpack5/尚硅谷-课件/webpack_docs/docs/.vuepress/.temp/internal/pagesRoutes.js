import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-a6cc4bba","/base/base.html",{"title":"基本使用"},["/base/base","/base/base.md"]],
  ["v-21f1ba15","/base/clean.html",{"title":"自动清空上次打包资源"},["/base/clean","/base/clean.md"]],
  ["v-e703ecdc","/base/config.html",{"title":"基本配置"},["/base/config","/base/config.md"]],
  ["v-80c5304a","/base/css.html",{"title":"处理样式资源"},["/base/css","/base/css.md"]],
  ["v-34029aa3","/base/development.html",{"title":"开发模式介绍"},["/base/development","/base/development.md"]],
  ["v-85d4d936","/base/font.html",{"title":"处理字体图标资源"},["/base/font","/base/font.md"]],
  ["v-ab115cee","/base/html.html",{"title":"处理 Html 资源"},["/base/html","/base/html.md"]],
  ["v-03183b7a","/base/image.html",{"title":"处理图片资源"},["/base/image","/base/image.md"]],
  ["v-0bd200c7","/base/javascript.html",{"title":"处理 js 资源"},["/base/javascript","/base/javascript.md"]],
  ["v-50d92e02","/base/minifyHtml.html",{"title":"html 压缩"},["/base/minifyHtml","/base/minifyHtml.md"]],
  ["v-65f7fcd8","/base/optimizeCss.html",{"title":"Css 处理"},["/base/optimizeCss","/base/optimizeCss.md"]],
  ["v-499655ae","/base/other.html",{"title":"处理其他资源"},["/base/other","/base/other.md"]],
  ["v-5a4f3333","/base/output.html",{"title":"修改输出资源的名称和路径"},["/base/output","/base/output.md"]],
  ["v-6940ce0a","/base/production.html",{"title":"生产模式介绍"},["/base/production","/base/production.md"]],
  ["v-1455d425","/base/",{"title":"前言"},["/base/index.html","/base/README.md"]],
  ["v-5e3bb631","/base/server.html",{"title":"开发服务器&自动化"},["/base/server","/base/server.md"]],
  ["v-ce2194d0","/base/summary.html",{"title":"总结"},["/base/summary","/base/summary.md"]],
  ["v-61413f94","/project/react-cli.html",{"title":"React 脚手架"},["/project/react-cli","/project/react-cli.md"]],
  ["v-c9bbfba2","/project/",{"title":"介绍"},["/project/index.html","/project/README.md"]],
  ["v-2a04a4a2","/project/summary.html",{"title":"总结"},["/project/summary","/project/summary.md"]],
  ["v-04c1b7cf","/project/vue-cli.html",{"title":"Vue 脚手架"},["/project/vue-cli","/project/vue-cli.md"]],
  ["v-1cfd2df6","/origin/loader.html",{"title":"Loader 原理"},["/origin/loader","/origin/loader.md"]],
  ["v-2d7562d6","/origin/plugin.html",{"title":"Plugin 原理"},["/origin/plugin","/origin/plugin.md"]],
  ["v-2259a8b0","/origin/",{"title":"介绍"},["/origin/index.html","/origin/README.md"]],
  ["v-860cdcba","/origin/summary.html",{"title":"总结"},["/origin/summary","/origin/summary.md"]],
  ["v-0670fc65","/intro/asset.html",{"title":"学习资料"},["/intro/asset","/intro/asset.md"]],
  ["v-581e5b94","/intro/group.html",{"title":"适合群体"},["/intro/group","/intro/group.md"]],
  ["v-7d0ce4de","/intro/learn.html",{"title":"我能学到什么"},["/intro/learn","/intro/learn.md"]],
  ["v-10b408dc","/intro/pre.html",{"title":"前置知识"},["/intro/pre","/intro/pre.md"]],
  ["v-f9e30908","/intro/",{"title":"依赖环境"},["/intro/index.html","/intro/README.md"]],
  ["v-7964f787","/senior/enhanceExperience.html",{"title":"提升开发体验"},["/senior/enhanceExperience","/senior/enhanceExperience.md"]],
  ["v-7b858f23","/senior/liftingSpeed.html",{"title":"提升打包构建速度"},["/senior/liftingSpeed","/senior/liftingSpeed.md"]],
  ["v-5489448c","/senior/optimizePerformance.html",{"title":"优化代码运行性能"},["/senior/optimizePerformance","/senior/optimizePerformance.md"]],
  ["v-3fe9ea34","/senior/",{"title":"介绍"},["/senior/index.html","/senior/README.md"]],
  ["v-5460e2da","/senior/reduceVolume.html",{"title":"减少代码体积"},["/senior/reduceVolume","/senior/reduceVolume.md"]],
  ["v-1d695a4e","/senior/summary.html",{"title":"总结"},["/senior/summary","/senior/summary.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
