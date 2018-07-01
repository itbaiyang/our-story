import Router from 'koa-router'
// import articles from '../controller/article'

const router = Router({
  prefix: '/article'
});
const index = function(ctx) {
  ctx.response.body = 'Hello article'
}
router.get('/', index)
module.exports = router