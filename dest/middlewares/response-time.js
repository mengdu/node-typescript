'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        // console.log('\u001b[46m[HTTP]\u001b[0m', `>> ${ctx.method} ${ctx.url}`)
        yield next();
        var delta = Math.ceil(Date.now() - start);
        let code = '';
        if (ctx.status === 200) {
            code = '32';
        }
        else if (ctx.status === 404) {
            code = '33';
        }
        else if (ctx.status > 500) {
            code = '31';
        }
        else {
            code = '34';
        }
        var info = `<< \u001b[33m${ctx.method}\u001b[0m \u001b[${code}m${ctx.status}\u001b[0m ${ctx.url} - \u001b[32m${delta}\u001b[0m ms`;
        ctx.set('X-Response-Time', delta + 'ms');
        console.log('\u001b[42m[HTTP]\u001b[0m', info);
    });
}
exports.default = default_1;
