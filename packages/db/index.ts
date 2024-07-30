import { sequelize } from './connect'

await sequelize.sync({ alter: true })
export { sequelize }

export * from './tables/permission'
export * from './tables/permission_groups'
export * from './tables/permission_user_group'
export * from './tables/config'

import('./assocs')
