"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
/**
 *  insertKeys returns a mapped version of the provided children to include a key and enhanced className prop
 */
exports.insertKeys = (rootClass, children) => {
    return react_1.default.Children.map(children, child => {
        const elem = child;
        return react_1.default.cloneElement(elem, {
            className: classnames_1.default(elem.props.className, `${rootClass}-item`),
            key: new mongodb_stitch_browser_sdk_1.BSON.ObjectId().toHexString(),
        });
    });
};
exports.mapRenderedOutput = (value, verbose, indent) => {
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