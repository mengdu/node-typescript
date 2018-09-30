'use strict'
import './config'
import { format } from './utils'
import app from './app'

const port = Number(process.env.PORT || 4000)

app.listen(port)

console.log('Start at: ' + format(Date.now(), 'yyyy-MM-dd HH:mm:ss.ms'))
console.log('NODE_ENV: ' + process.env.NODE_ENV)
console.log('Listen on: ' + port)
