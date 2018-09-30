'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("./router"));
const response_time_1 = __importDefault(require("./middlewares/response-time"));
const app = new koa_1.default();
app.use(response_time_1.default);
// Load router
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
app.on('error', (err, ctx) => {
    console.error(err);
    ctx.body = 'Error !';
});
exports.default = app;
