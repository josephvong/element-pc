const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  status: state => state.user.status,
  // 与权限有关的全局数据输出
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,

  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews
}

export default getters
