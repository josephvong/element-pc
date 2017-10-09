/*
  此文件 为 全局 公用的 工具函数
*/
// 在get方式中 将 负载在url 上面的 param 数据 转化成 json 格式的函数
export function param2Obj (url) {
  const search = url.split('?')[1] // 获取 url中 ？后面的全部字节
  if (!search) {
    return {}
  }
  /*
    param 字段解析过程：
    1.decodeURIComponent(search) 解析 params 字段
    2.将 " 字符 替换成 \\"  在实际编译中 转化为 数据编译用的 " 号
    3.将 & 符号 转化为 键与键 之间的分隔 ","
    4.将 = 符号 转化为 键与值 之间的 :
    5.两边补上{" "} , 用 JSON.parse 转化为 json
  */
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
