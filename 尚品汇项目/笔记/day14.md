项目day14:
分页、登录注册、购物车、支付->这几个业务有疑问的地方及时喊我
elementUI:今晚在稍微看看【后台管理系统项目：全都是用elementUI】


1)个人中心路由搭建
1.1当年学习路由的时候:一级路由、二级路由、三级路由 【二级路由搭建】
1.2完成个人中心数据的展示【分页】




2)未登录全局守卫的判断

在前面课程当中:导航守卫【导航:路由发生变化，守卫可以检测到，通过判断，确定这次路由跳转】

前置守卫：在路由跳转之前，进行判断
后置守卫:路由都已经跳转完毕才执行。


未登录的情况:
全局守卫:只要的项目当中任何某一个路由发生变化，就会出发。
项目守卫使用:一般有用前置全局守卫

用户登录:

用户未登录：点击购物车的结算按钮->交易页面【没有登录:去不了】
           未登录不能调到支付页面
           未登录不能调到支付成功页面
           未登录不能去个人中心【都不知道你是谁：展示谁的个人中心啊】




3)路由独享守卫
路由独享守卫：需要在配置路由的地方使用
导航守卫:全局守卫->项目当中有任何路由变化【a->b,b->d】触发。
        路由独享守卫：专门负责某一个路由

用户登陆了:
去交易页面:从购物车才能跳转到交易页面。

next():你本来想去哪里，我就放行，你就去完事了。

next('/login'):执行守卫放行到执行的路由。

next(false):路由跳转的时候，从哪里来回那里去。



4)组件内守卫---->一般很少用【全局 + 路由独享守卫】
组件内守卫：也是专门负责某一个路由【并非负责全部路由】，写法和路由独享守卫有区别？
组件内守卫需要书写在组件内部

beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave



6)路由懒加载
面试【高频的面试】:项目的性能优化手段有哪些？
v-if|v-show:尽可能采用v-show
按需引入【lodash、elementUI】
防抖与节流
路由懒加载：当用户访问的时候，加载对应组件进行展示。



7)图片懒加载
vue-lazyload:图片懒加载
图片：比用用户网络不好，服务器的数据没有回来，
总不可能让用户看白色，至少有一个默认图片在展示。






8)表单验证【后台管理系统：大量使用elementUI】
以后工作的时候经常会进行表单验证【element-ui】进行表单验证，so 简单。
项目当中表单验证功能比较常见的。

8.1vee-validate插件：Vue官方提供的一个表单验证的插件【老师接下来的操作能大概看懂即可】
这个插件很难用：如果你翻看它的文档（看一个月：不保证能看懂），依赖文件很多（文档书写的很难理解）
花大量时间学习，很难搞懂。


8.2哪怕将来工作了，真的使用vee-valadiate【老师项目搞出来：改老师代码即可】


使用步骤：
1：安装vee-valadite，别安装最新版本@2
2：在plugins文件夹中创建一个validate.js[专门注册vee-valadite]
3:注册插件
4：注册插件的时候，用中文，以及需要验证的字段【用中文显示提示形式】
5：在入口文件需要引入执行一次
6:使用vee-valadiate插件





















8)vee-validate 基本使用

第一步：插件安装与引入
cnpm i vee-validate@2 --save  安装的插件安装2版本的

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'   // 引入中文 message
Vue.use(VeeValidate)

第二步：提示信息
VeeValidate.Validator.localize('zh_CN', {
messages: {
...zh_CN.messages,
is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
},
attributes: { // 给校验的 field 属性名映射中文名称
phone: '手机号',
code: '验证码',
password:'密码',
password1:'确认密码',
isCheck:'协议'
}
})

第三步：基本使用
<input
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
<span class="error-msg">{{ errors.first("phone") }}</span>

const success = await this.$validator.validateAll(); //全部表单验证
//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
validate: value => {
return value
},
getMessage: field => field + '必须同意'
})

