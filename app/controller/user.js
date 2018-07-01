import models from '../models/index'
const index = (ctx, _next) => {
  ctx.body = 'this a users response!' + ctx.session.userId
};

const list = async (ctx, _next) => {
  const userList = await models.User.findOne()
  return ctx.response.body = userList
};

const logIn = async (ctx, _next) => {
  const query = ctx.request.query
  if (!(query.account && query.password)) {
    return
  }
  let user = await models.User.findOne({ where: { phone: query.account }})
  if(user && user.authenticate(query.password)) {
    ctx.cookies.set('userId', user.id)
    // ctx.status = 302;
    // ctx.flashMessage.notice = 'Log In Successfully!';
    // ctx.redirect('/');
  } else {
    // const locals = { nav: 'signIn' };
    // ctx.flashMessage.warning = 'User name or Password Error.';
    // await ctx.render('users/signIn', locals);
  }
};

export default {
  index,
  logIn,
  list
};