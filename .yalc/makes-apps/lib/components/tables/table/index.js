"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("../../utils");
var header_1 = tslib_1.__importDefault(require("../header"));
var data_1 = tslib_1.__importDefault(require("../data"));
var utils_2 = require("./utils");
var defaultProps = {
    rootClass: 'table',
};
var Table = function (_a) {
    var _b;
    var columnHeader = _a.columnHeader, columns = _a.columns, data = _a.data, rootClass = _a.rootClass, rotate = _a.rotate, stretched = _a.stretched, onRowClick = _a.onRowClick;
    var classer = new utils_1.Classer(rootClass);
    var sortedData = utils_2.sortData(data);
    return (react_1.default.createElement("table", { className: classnames_1.default(classer.name(), (_b = {}, _b[classer.name('stretched')] = stretched, _b)) },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", { className: classer.name('header-row') }, columns.map(function (_a) {
                var _b;
                var key = _a.key, header = _a.header, sortable = _a.sortable;
                var headerProps = {
                    className: classnames_1.default(classer.name('header'), (_b = {}, _b[classer.name('header-column-based')] = columnHeader, _b)),
                    key: key.toString(),
                    rotate: rotate,
                    sortable: sortable,
                };
                if (typeof header === 'function') {
                    return header(headerProps);
                }
                var Component = columnHeader ? data_1.default : header_1.default;
                return react_1.default.createElement(Component, tslib_1.__assign({}, headerProps), header);
            }))),
        react_1.default.createElement("tbody", null, sortedData.map(function (item) {
            var _a;
            return (react_1.default.createElement("tr", { key: utils_2.toKey(item), className: classnames_1.default(classer.name('row'), (_a = {}, _a[classer.name('row-clickable')] = !!onRowClick, _a)), onClick: function (e) { return (onRowClick ? onRowClick(item, e) : undefined); } }, columns.map(function (_a) {
                var _b;
                var accessor = _a.accessor, empty = _a.empty, key = _a.key, render = _a.render;
                var value = utils_2.normalizeAccessor(key.toString(), accessor)(item);
                var dataProps = {
                    className: classnames_1.default(classer.name('data'), (_b = {}, _b[classer.name('data-column-based')] = columnHeader, _b)),
                    key: key.toString(),
                };
                if (render) {
                    return render(tslib_1.__assign({}, dataProps, { item: item, value: value }));
                }
                var Component = columnHeader ? header_1.default : data_1.default;
                return react_1.default.createElement(Component, tslib_1.__assign({}, dataProps), value ? value : empty);
            })));
        }))));
};
Table.defaultProps = defaultProps;
exports.default = Table;
//# sourceMappingURL=index.js.map