import type { Request } from '@/app/types'
import { Response, NextFunction } from 'express'
import joi from 'joi'

/**
 * express中间件 注册验证 req.body 参数的方法
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  req.validateBody = (schemaParameter) => {
    const schema = joi.object(schemaParameter)
    const validate = schema.validate(req.body)

    if (validate.error) {
      // todo: dev模式debug输出
      console.log(validate.error)

      return false
    }
    return validate.value
  }

  next()
}
