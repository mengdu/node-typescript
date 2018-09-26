'use strict'
export default class Demo {
  private name: string
  protected age: number
  readonly info: string
  [key: string]: any

  constructor(name: string, age: number, info: string) {
    this.name = name
    this.age = age
    this.info = info
  }

  public print () : void {
    console.log(this)
  }

  set (key: string, val: any) : boolean {
    this[key] = val

    return this[key]
  }
}
