'use strict'

export default async function (ctx: any, next: any) {
  const start = Date.now()
  // console.log('\u001b[46m[HTTP]\u001b[0m', `>> ${ctx.method} ${ctx.url}`)
  await next()

  var delta = Math.ceil(Date.now() - start)
  let code = ''
  if (ctx.status === 200) {
    code = '32'
  } else if (ctx.status === 404) {
    code = '33'
  } else if (ctx.status > 500) {
    code = '31'
  } else {
    code = '34'
  }

  var info = `<< \u001b[33m${ctx.method}\u001b[0m \u001b[${code}m${ctx.status}\u001b[0m ${ctx.url} - \u001b[32m${delta}\u001b[0m ms`

  ctx.set('X-Response-Time', delta + 'ms')

  console.log('\u001b[39;42m[HTTP]\u001b[0m', info)
}
