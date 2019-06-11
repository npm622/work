"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitFor, immediate) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var worker = function () {
            timeout = undefined;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(worker, waitFor);
        if (immediate && timeout === undefined) {
            func.apply(context, args);
        }
    };
}
exports.debounce = debounce;
//# sourceMappingURL=utils.js.map