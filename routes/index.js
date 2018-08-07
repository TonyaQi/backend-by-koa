const router = require('koa-router')()

router.get('a', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('string', function (ctx) {
    ctx.body = 'koa2 string'
})



module.exports = router;
