import router from './router' // 导入router实例，用于动态添加路由节点
import store from './store' // 导入vuex的 store，用于通过权限验证 调用vuex的permission模块里的action来动态更改路由集合
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth' // 在通过获取cookies所记录的用户token，用户登录名

/*
  根据 用户的 roles 和 路由节点里面路由原信息(meta)的role信息 判断 当前（已登录）的用户是否有全新进入页面
*/
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin权限 所有页面都有权限
  if (!permissionRoles) return true // meta 没有role数据，无需权限可访问的页面
  return roles.some((role) => { // 判断用户的roles（权限角色集合）里面有没有 当前 页面可访问的权限
    return permissionRoles.indexOf(role) >= 0 // 数组元素(role)中有当前页面可访问的权限
  }) // 存在 返回 true 否则返回 false
}

// whiteList 为 无需登录即可访问 的 路由页面，例如 login页
const whiteList = ['/login']

// 路由器实例 定义 全局的 导航守卫（在路由跳转到某些页面前做某些必要处理）
router.beforeEach((to, from, next) => { // 参数 to(即将进入的页面) from(即将离开的页面) next(控制路由跳转下一步的函数)
  NProgress.start() // 开启 Progress进度条
  if (getToken()) { // 获取cookie中记录的用户登录 token, 若token存在（已登录）
    if (to.path === '/login') { // 如果用户已经登录，下个进入页面依然是 /login 时
      next({path: '/'}) // 直接跳过 /login, 进入 '/'(dashboard页面默认路径)
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已经 获取完 自己的user_info 数据
        // getters.roles 长度为 0 时，表示用户已经登录，但用户数据未完全获取
        store.dispatch('GetUserInfo').then((res) => { // 执行 异步获取用户信息 函数
          // 根据异步获取的userInfo 的返回结果 res
          const roles = res.role // 定义用户的权限

          // 将用户的roles数据 传入 vuex 的 actions(GeneratorRoutes方法)
          store.dispatch('GeneratorRoutes', roles).then(() => { // 此方法 通过 roles 来给用户 添加 对应roles 可以访问的路由
            // 调用router实例的 addRoutes() 方法 将 用户有权限访问的 router页面 动态添加进路由实例里面
            router.addRoutes(store.getters.addRouters)
            // 此处 表示把 将要进入的路由页面作为 要执行的 next() 函数的 参数
            next({to}) // next('/...') 或 next({path:'/...'})表示跳转到一个不同的地址
          }).catch((err) => {
            console.log(err)
          })
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.role)) { // 有权限登录 ‘to’ 路由页面
          next() // 调用next()函数进入
        } else { // 用户没有权限 ‘to’ 的页面
          next({path: '/401', query: { noGoBack: true }})
        }
      }
    }
  } else { // 如果用户未登录
    if (whiteList.indexOf(to.path) !== -1) { // 如果用户是打开 login页面（无需登录）
      next() // 可以进入
    } else {
      next('/login') // 全部重定向到 login页面
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 路由跳转成功，progress 加载结束
})
