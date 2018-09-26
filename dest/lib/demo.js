'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Demo {
    constructor(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    print() {
        console.log(this);
    }
    update(key, val) {
        this[key] = val;
        return true;
    }
}
exports.default = Demo;
