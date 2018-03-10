import fetch from '@/utils/fetch'  // axios 的封装函数

export function fetchList (query) {
  return fetch({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle () {
  return fetch({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv (pv) {
  return fetch({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

