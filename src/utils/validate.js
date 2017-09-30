/**
* 验证输入内容有效的函数
*/

// 验证用户名是否有效 (只接受字母)
export function isvalidUsername (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

