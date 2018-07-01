import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
import home from '../controller/home'
const basename = path.basename(module.filename)
const router = Router()

fs
  .readdirSync(__dirname) //当前目录下的文件列表
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') //除去本文件
  })
  .forEach((file) => {
    let route = require(path.join(__dirname, file))
    router.use(route.routes(), route.allowedMethods())
  })
router.get('/')

export default router