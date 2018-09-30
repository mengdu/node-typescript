import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx: any) => {
  ctx.body = 'Wellcome use koa server.'
})

router.get('/error', (ctx: any) => {
  ctx.throw('500', 'This is a test')
  ctx.body = ''
})

export default router
