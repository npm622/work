"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionType = (namespace, type) => `${namespace}: ${type}`;
class default_1 {
    constructor(namespace, type, status, payloadCreator, metaCreator) {
        this.namespace = namespace;
        this.type = type;
        this.status = status;
        this.payloadCreator = payloadCreator;
        this.metaCreator = metaCreator;
        this.action = (...args) => {
            return {
                type: exports.actionType(this.namespace, this.type),
                status: this.status,
                payload: this.payloadCreator(...args),
                meta: this.metaCreator(),
            };
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=action_creator.js.map