'use strict'
import Demo from './lib/demo'

function say (str: string) : any {
  console.log(str)
}

const text:string = 'Wellcome use typescript !'

console.log(text)

const demo: Demo = new Demo('admin', 23, 'This is test acount.')

console.log(demo)
demo.print()
demo.set('age', 24)
demo.set('name', 'root')
demo.print()
export default demo
