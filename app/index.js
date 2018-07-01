import Koa from 'koa'
import session from 'koa-session'
import router from './route'
import staticServer from 'koa-static'

const app = new Koa()

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'token',
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}
app.use(session(CONFIG, app))

app.use(router.routes(), router.allowedMethods())

app.use(staticServer(__dirname + '/dist'));
app.listen(3000)

export default app