declare class Demo {
  [key: string]: any; // key/val
  prototype: Demo; // 原型
  new(): Demo; // 必须new
  private name: string // 私有名称
}
