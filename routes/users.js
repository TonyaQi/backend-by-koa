const router = require('koa-router')()

router.get('/', function (ctx, next) {
    let  id = ctx.query.id;
    ctx.body = "your id is:" + id + ", thank you !";

})

router.get('/bar/:id', function (ctx, next) {
  let id = ctx.params.id;
  ctx.body = 'this is a users/bar response'
})

module.exports = router
