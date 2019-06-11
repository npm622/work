"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("../../utils");
var ordered_1 = tslib_1.__importDefault(require("../ordered"));
var unordered_1 = tslib_1.__importDefault(require("../unordered"));
var item_1 = tslib_1.__importDefault(require("../item"));
var utils_2 = require("./utils");
var defaultObjectRenderer = {};
var defaultProps = {
    rootClass: 'list',
    objectRenderer: defaultObjectRenderer,
};
var List = function (props) {
    var _a;
    var ordered = props.ordered, rootClass = props.rootClass, styled = props.styled;
    var children = utils_2.insertKeys(rootClass, renderBody(props));
    var className = classnames_1.default(rootClass, (_a = {}, _a[rootClass + "-unstyled"] = !styled, _a));
    if (ordered) {
        return react_1.default.createElement(ordered_1.default, { className: className }, children);
    }
    return react_1.default.createElement(unordered_1.default, { className: className }, children);
};
List.defaultProps = defaultProps;
exports.default = List;
var renderBody = function (_a) {
    var data = _a.data, _b = _a.objectRenderer, verbose = _b.verbose, indent = _b.indent, props = tslib_1.__rest(_a, ["data", "objectRenderer"]);
    if (utils_1.hasChildren(props)) {
        return data.map(props.children);
    }
    if (utils_1.hasRender(props)) {
        return data.map(props.render).map(function (value) { return react_1.default.createElement(item_1.default, null, utils_2.mapRenderedOutput(value, verbose, indent)); });
    }
    return data.map(function (item) { return react_1.default.createElement(item_1.default, null, item); });
};
//# sourceMappingURL=index.js.map