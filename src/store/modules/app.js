// import Cookies from 'js-cookie'
const app = {
  state: {
    sidebar: {
      opened: true // !+Cookies.get('sidebarStatus')
    },
    visitedViews: [] // 历史访问页面的列表 （显示在页面顶部）
  },
  mutations: {
    // 切换 sidebar 展开收起
    TOGGLE_SIDEBAR: (state) => {
      /*
      if (state.sidebar.opend) { // opened 为true （为开）
        Cookies.set('sidebarStatus', 0)
      } else { // 为关
        Cookies.set('sidebarStatus', 1)
      }
      */
      state.sidebar.opened = !state.sidebar.opened
    },

    // 添加 历史访问列表
    ADD_VISITED_VIEWS: (state, view) => { // 传参 为 当前要添加的路由节点
      // 判读 当前路由节点 是否已经存在于 visitedViews 内
      if (state.visitedViews.some((v) => { v.path === view.path })) {
        return // 若存在， 返回（不添加）
      }
      state.visitedViews.push({name: view.name, path: view.path})  // 将 路由的 path 和 name 信息 作为 对象 添加到数组内
    },

    DEL_VISITED_VIEWS: (state, view) => {
      let index
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          index = i
          break
        }
        state.visitedViews.splice(index, 1)  // splice(x,length) 删除数组第x位开始的 length 个长度的值
      }
    }
  },
  actions: {
    ToggleSideBar ({commit}) {
      commit('TOGGLE_SIDEBAR')
    },

    addVisitedViews ({commit, state}, view) {
      commit('ADD_VISITED_VIEWS', view)
    },

    // 此 actions函数 需要在 修改了store 全局数据之后，再把修改的数组输出
    delVisitedViews ({commit, state}, view) {
      return new Promise((resolve) => { // 使用 输出 promise 对象，可以把 历史路由列表的修改过程(状态) 进行输出
        commit('DEL_VISITED_VIEWS', view) // Promise 中 对 访问历史列表进行修改
        resolve([...state.visitedViews]) // 用resolve 输出 vistiedView 列表
      })
    }
  }
}

export default app
