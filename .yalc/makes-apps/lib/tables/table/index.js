"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
var utils_1 = require("../../utils");
var cell_1 = tslib_1.__importDefault(require("../cell"));
var header_1 = tslib_1.__importDefault(require("../header"));
var utils_2 = require("../table/utils");
var defaultObjectRenderer = {};
var defaultProps = {
    rootClass: 'table',
    objectRenderer: defaultObjectRenderer,
};
var Table = function (props) {
    var classer = new utils_1.Classer(props.rootClass);
    return (react_1.default.createElement("table", { className: classer.name() },
        react_1.default.createElement("thead", null,
            react_1.default.createElement(header_1.default, { className: classer.name('header'), headers: props.headers })),
        react_1.default.createElement("tbody", null, utils_2.injectTableProps(classer.name(), renderBody(classer.name('body'), props)))));
};
Table.deafultProps = defaultProps;
exports.default = Table;
var renderBody = function (className, _a) {
    var data = _a.data, headers = _a.headers, _b = _a.objectRenderer, verbose = _b.verbose, indent = _b.indent, props = tslib_1.__rest(_a, ["data", "headers", "objectRenderer"]);
    var renderData = function (rowRenderer) {
        return data.map(function (item) { return (react_1.default.createElement("tr", { className: className, key: new mongodb_stitch_browser_sdk_1.BSON.ObjectId().toHexString() }, headers.map(function (_a, idx) {
            var accessor = _a.accessor;
            var key = accessor;
            return rowRenderer({ value: item[key], item: item }, { accessor: key, idx: idx });
        }))); });
    };
    if (utils_1.hasChildren(props)) {
        return renderData(props.children);
    }
    if (utils_1.hasRender(props)) {
        return renderData(props.render).map(function (value) { return react_1.default.createElement(cell_1.default, null, utils_2.mapTableData(value, verbose, indent)); });
    }
    return renderData(function (_a) {
        var value = _a.value;
        return react_1.default.createElement(cell_1.default, null, value);
    });
};
//# sourceMappingURL=index.js.map