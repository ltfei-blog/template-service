/**
 * jwt忽略的路由列表
 * 进匹配开头
 */
const paths: string[] = []

export default paths.map((e) => {
  return new RegExp(`^${e}`)
})
