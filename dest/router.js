"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get('/', ctx => {
    ctx.body = 'Wellcome use koa server.';
});
router.get('/error', ctx => {
    ctx.throw('500', 'This is a test');
    ctx.body = '';
});
exports.default = router;
