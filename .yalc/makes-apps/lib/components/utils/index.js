"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classer = /** @class */ (function () {
    function Classer(prefix) {
        this.prefix = prefix;
    }
    Classer.prototype.name = function (className) {
        if (!className) {
            return this.prefix;
        }
        return this.prefix + "-" + className;
    };
    Classer.prototype.new = function (prefix) {
        return new Classer(this.prefix + "-" + prefix);
    };
    return Classer;
}());
exports.Classer = Classer;
exports.isFunction = function (prop) { return typeof prop === 'function'; };
exports.hasChildren = function (props) {
    return 'children' in props && exports.isFunction(props.children);
};
exports.hasRender = function (props) {
    return 'render' in props && exports.isFunction(props.render);
};
//# sourceMappingURL=index.js.map