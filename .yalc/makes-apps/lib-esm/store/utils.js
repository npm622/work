"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitFor, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const worker = () => {
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