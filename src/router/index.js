import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

// layout 组件属于登录后的所有内容显示的主界面容器，通过同步方式进行预先生成（不异步生成）
import layout from '@/views/layout/Layout'

// 没有权限访问限制的 公共页面 路由集合
/*
* 路由节点参数：
* hidden: boolean true表示不在左侧导航栏中显示
* noDropdown: boolean true表示在左侧导航栏，且有子页面（需要有子列表导航到子页面）
* meta: array 记录当前路由页面 能够访问的权限名
*/
export const constantRouterMap = [
  { // 登录注册页
    path: '/login',
    component: _import('login/index'),
    hidden: true,
    noDropdown: false
  },
  { // 默认首页 dashboard
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: layout,
    hidden: true,
    noDropdown: false,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: '首页'
      }
    ]
  },
  { // 简介页面
    path: '/introduction',
    redirect: '/introduction/index',
    component: layout,
    name: '项目简介',
    noDropdown: true,
    icon: ['iconfont', 'icon-people'],
    children: [
      {
        path: 'index',
        component: _import('introduction/index'),
        name: '简介'
      }
    ]
  },
  { // 404 错误页
    path: '/404',
    component: _import('errorPage/404'),
    name: '404',
    hidden: true,
    noDropdown: false
  },
  { // 401 无权限错误页
    path: '/401',
    component: _import('errorPage/401'),
    name: '401',
    hidden: true,
    noDropdown: false
  }
]

export default new Router({
  routes: constantRouterMap
})

// 受权限访问限制的 页面 路由集合，通过 vuex 给不同权限用户动态添加
export const asyncRouterMap = [
  // 非路由指向的 路径，全部调制 404 页面
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/permission',
    component: layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: ['iconfont', 'icon-lock'],
    meta: { role: ['admin'] }, // 通过vue-router 路由原的meta属性，控制页面有那些权限可以访问
    noDropdown: true,
    children: [
      {
        path: 'index',
        component: _import('permission/index'),
        name: '权限测试页',
        meta: {role: ['admin']}
      }
    ]
  },
  {
    path: '/component',
    component: layout,
    redirect: '/components/index',
    name: '组件',
    icon: ['iconfont', 'icon-component'],
    meta: { role: ['admin'] }, // 通过vue-router 路由原的meta属性，控制页面有那些权限可以访问
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('components/index'),
        name: '组件介绍'
      },
      {
        path: 'treeList',
        component: _import('components/treeListPage/index'),
        name: '递归树状列表'
      },
      {
        path: 'tinyMce',
        component: _import('components/tinymcePage/index'),
        name: '富文本编辑器'
      },
      {
        path: 'testB',
        component: _import('components/testB'),
        name: '子页面测试B'
      }
      /*
      {
        path: 'treeList',
        component: _import('components/treeList/treeList'),
        name: '递归树状列表'
      }
      */
    ]
  }
]
