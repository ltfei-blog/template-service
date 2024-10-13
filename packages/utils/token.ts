import jwt from 'jsonwebtoken'
import { getConfig } from '@/config'
import type { TokenUser } from '@/app/types'

export const createUserToken = async (user: TokenUser) => {
  const secret = await getConfig('app', 'jwtSecret')
  return jwt.sign(user, secret, {
    // todo: 登录有效期配置项
    expiresIn: '7d'
  })
}
