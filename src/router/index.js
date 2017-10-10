import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// layout 组件属于登录后的所有内容显示的主界面容器，通过同步方式进行预先生成（不异步生成）
import layout from '@/views/layout/Layout'

// 没有权限访问限制的 公共页面 路由集合
export const constantRouterMap = [
  { // 登录注册页
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  { // 默认首页 dashboard
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: layout,
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index')
      }
    ]
  },
  { // 404 错误页
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true
  },
  { // 401 无权限错误页
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
})

// 受权限访问限制的 页面 路由集合，通过 vuex 给不同权限用户动态添加
export const asyncRouterMap = [
  {
    path: '/permission',
    component: layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'lock',
    meta: { role: ['admin'] }, // 通过vue-router 路由原的meta属性，控制页面有那些权限可以访问
    children: [
      {
        path: 'index',
        component: _import('permission/index'),
        name: '权限测试页',
        meta: {role: ['admin']}
      }
    ]
  }
]
