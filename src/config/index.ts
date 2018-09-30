'use strict'
import dotenv from 'dotenv'
// load .env file
dotenv.config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  name: 'Koa Demo',
  env: process.env.NODE_ENV
}
