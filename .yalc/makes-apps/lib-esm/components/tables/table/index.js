"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
const utils_1 = require("../../utils");
const cell_1 = tslib_1.__importDefault(require("../cell"));
const header_1 = tslib_1.__importDefault(require("../header"));
const utils_2 = require("../table/utils");
const defaultObjectRenderer = {};
const defaultProps = {
    rootClass: 'table',
    objectRenderer: defaultObjectRenderer,
};
const Table = (props) => {
    const classer = new utils_1.Classer(props.rootClass);
    return (react_1.default.createElement("table", { className: classer.name() },
        react_1.default.createElement("thead", null,
            react_1.default.createElement(header_1.default, { className: classer.name('header'), headers: props.headers })),
        react_1.default.createElement("tbody", null, utils_2.injectTableProps(classer.name(), renderBody(classer.name('body'), props)))));
};
Table.deafultProps = defaultProps;
exports.default = Table;
const renderBody = (className, _a) => {
    var { data, headers, objectRenderer: { verbose, indent } } = _a, props = tslib_1.__rest(_a, ["data", "headers", "objectRenderer"]);
    const renderData = (rowRenderer) => data.map(item => (react_1.default.createElement("tr", { className: className, key: new mongodb_stitch_browser_sdk_1.BSON.ObjectId().toHexString() }, headers.map(({ accessor }, idx) => {
        const key = accessor;
        return rowRenderer({ value: item[key], item }, { accessor: key, idx });
    }))));
    if (utils_1.hasChildren(props)) {
        return renderData(props.children);
    }
    if (utils_1.hasRender(props)) {
        return renderData(props.render).map(value => react_1.default.createElement(cell_1.default, null, utils_2.mapTableData(value, verbose, indent)));
    }
    return renderData(({ value }) => react_1.default.createElement(cell_1.default, null, value));
};
//# sourceMappingURL=index.js.map