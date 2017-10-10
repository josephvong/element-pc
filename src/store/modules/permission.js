import { asyncRouterMap, constantRouterMap } from '@/router'

// 判断 用户的role（权限角色） 是否有权限进入某个 route （路由页面）
function hasPermission (roles, route) {
  if (route.meta && route.meta.role) { // 根据当前这个route 的 路由原信息（meta）里面的 role键 与参数中的role 对照
    // arr.some() 方法 判断 数组/集合 内是否有 参数函数所定义条件的值，有返回true，没有 false
    return roles.some((role) => {
      return route.meta.role.indexOf(role) >= 0
    }) // 传参的roles为 用户所拥有的权限(多个)，将当前路由（页面）的meta中的 role 与 用户的role 对比一下，是否存在当前用户的role
  } else { // 如果路由页面 没有meta 和 meta.role 表示这个页面 无需权限限制访问
    return true // 直接返回true
  }
}

function filterAsyncRouter (asyncRouterMap, roles) {
  // arr.filter(fn) 遍历数组每一项并使用参数fn 进行判断是否符合条件，生成全部符合fn定义的条件的函数
  const accessedRoutes = asyncRouterMap.filter((route) => { // 对有权限限制访问的 路由集合进行过滤
    if (hasPermission(roles, route)) { // 根据当前用户的roles 和 当前路由 是否有权限 的判断
      if (route.children && route.children.length) { // 如果当前路由有子路由
        route.children = filterAsyncRouter(route.children, roles) // 对路由的子页面 进行有无访问权限的过滤
      }
      return true // 返回true， 表示 将 此路由（当前用户的roles可访问）加入为accessRoutes 数组
    }
    return false // 负责，排除此路由
  })
  return accessedRoutes // 最终输出当前 用户 对应其全部role 能够访问的全部路由集合
}

/*
  permission 权限模块， 在用户登录后，控制用户 具有 进入那些路由页面或执行某些操作的权限
*/
const permission = {
  state: {
    routers: constantRouterMap, // 默认的路由集合（无需权限）
    addRouters: []    // 需要权限的 路由集合
  },
  mutations: {
    // 设置准入路由 将 用户可以进入的路由集合 与 无需权限进入的路由集合 合并 定义用户的 可入路由集合
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GeneratorRoutes ({ commit }, data) {
      // 定义并返回一个异步回调promise
      return new Promise((resolve, reject) => {
        const roles = data // 获取data 里面的 roles（用户角色属性）
        let accessedRouters  // 创建一个变量，用来定义用户可以访问的路由页面
        if (roles.indexOf('admin') >= 0) { // 用户权限为 admin（管理员）
          accessedRouters = asyncRouterMap // 将所有需要权限限制访问的路由集合 赋值给 accessedRouters（管理员获得全部权限）
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        console.log('arr2', accessedRouters)
        // 根据 用户的roles 定义其能够访问的所有路由页面集合后，将其定义在vuex全局属性里面
        commit('SET_ROUTERS', accessedRouters) // 调用 mutation 修改全局数据
        resolve() // 完成以上全部处理之后，执行后续的操作
      })
    }
  }
}

export default permission
