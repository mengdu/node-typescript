'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = __importDefault(require("./lib/demo"));
function say(str) {
    console.log(str);
}
const text = 'Wellcome use typescript !';
console.log(text);
const demo = new demo_1.default('admin', 23, 'This is test acount.');
console.log(demo);
demo.print();
