"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
/**
 *  insertKeys returns a mapped version of the provided children to include a key and enhanced className prop
 */
exports.injectTableProps = function (rootClass, children) {
    return react_1.default.Children.map(children, function (child) {
        var elem = child;
        return react_1.default.cloneElement(elem, {
            className: classnames_1.default(elem.props.className, rootClass + "-cell"),
            key: new mongodb_stitch_browser_sdk_1.BSON.ObjectId().toHexString(),
        });
    });
};
exports.mapTableData = function (data, verbose, indent) {
    if (verbose === void 0) { verbose = false; }
    if (indent === void 0) { indent = 2; }
    if (typeof data === 'object') {
        if (verbose) {
            return JSON.stringify(data, null, indent);
        }
    }
    if (typeof data === 'string') {
        return data;
    }
    return JSON.stringify(data);
};
//# sourceMappingURL=utils.js.map