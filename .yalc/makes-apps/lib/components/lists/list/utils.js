"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
/**
 *  insertKeys returns a mapped version of the provided children to include a key and enhanced className prop
 */
exports.insertKeys = function (rootClass, children) {
    return react_1.default.Children.map(children, function (child) {
        var elem = child;
        return react_1.default.cloneElement(elem, {
            className: classnames_1.default(elem.props.className, rootClass + "-item"),
            key: new mongodb_stitch_browser_sdk_1.BSON.ObjectId().toHexString(),
        });
    });
};
exports.mapRenderedOutput = function (value, verbose, indent) {
    if (typeof value === 'object') {
        if (verbose) {
            return JSON.stringify(value, null, indent);
        }
    }
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
};
//# sourceMappingURL=utils.js.map