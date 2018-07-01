import Router from 'koa-router'
import user from '../controller/user'

const router = Router({
  prefix: '/user'
});
const index = function(ctx) {
  ctx.response.body = 'Hello user'
}
router.get('/', index)
router.get('/log_in', user.logIn);
router.get('/list', user.list)
module.exports = router