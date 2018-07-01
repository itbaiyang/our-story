import Router from 'koa-router'

const router = Router({
  prefix: '/'
});
const index = function(ctx) {
  ctx.response.body = 'Hello about'
}
router.get('about', index)
module.exports = router