/**
 * 权限列表
 */

export type Permission = {
  key: string
  /**
   * 1 允许
   * 2 拒绝
   */
  defaultValue: 1 | 2
}

const permission = (key: string, defaultValue: 1 | 2): Permission => {
  return {
    key,
    defaultValue
  }
}

export const PERMISSIONS = {}
