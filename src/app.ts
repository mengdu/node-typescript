'use strict'
import Koa from 'koa'
import router from './router'
import responseTime from './middlewares/response-time'

const app = new Koa()

app.use(responseTime)

// Load router
app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err: any, ctx: any) => {
  console.error(err)

  ctx.body = 'Error !'
})

export default app
