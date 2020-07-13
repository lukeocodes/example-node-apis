// index.js

const Koa = require('koa')
const Router = require('@koa/router')
const json = require('koa-json')

const app = new Koa()
const router = new Router()
const port = process.env.PORT || 3000

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(json({ pretty: false }))

router.get('/example', (ctx) => {
  ctx.body = { message: 'Koa.js: Looks good to me!' }
})

app.listen(3000)