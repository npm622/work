"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Classer {
    constructor(prefix) {
        this.prefix = prefix;
    }
    name(className) {
        if (!className) {
            return this.prefix;
        }
        return `${this.prefix}-${className}`;
    }
    new(prefix) {
        return new Classer(`${this.prefix}-${prefix}`);
    }
}
exports.Classer = Classer;
exports.isFunction = (prop) => typeof prop === 'function';
exports.hasChildren = (props) => 'children' in props && exports.isFunction(props.children);
exports.hasRender = (props) => 'render' in props && exports.isFunction(props.render);
//# sourceMappingURL=index.js.map