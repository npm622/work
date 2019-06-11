"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionType = function (namespace, type) { return namespace + ": " + type; };
var default_1 = /** @class */ (function () {
    function default_1(namespace, type, status, payloadCreator, metaCreator) {
        var _this = this;
        this.namespace = namespace;
        this.type = type;
        this.status = status;
        this.payloadCreator = payloadCreator;
        this.metaCreator = metaCreator;
        this.action = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return {
                type: exports.actionType(_this.namespace, _this.type),
                status: _this.status,
                payload: _this.payloadCreator.apply(_this, args),
                meta: _this.metaCreator(),
            };
        };
    }
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=action_creator.js.map