'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
require("./config");
const utils_1 = require("./utils");
const app_1 = __importDefault(require("./app"));
const port = Number(process.env.PORT || 4000);
app_1.default.listen(port);
console.log('Start at: ' + utils_1.format(Date.now(), 'yyyy-MM-dd HH:mm:ss.ms'));
console.log('NODE_ENV: ' + process.env.NODE_ENV);
console.log('Listen on: ' + port);
