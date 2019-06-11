"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const utils_1 = require("../../utils");
const ordered_1 = tslib_1.__importDefault(require("../ordered"));
const unordered_1 = tslib_1.__importDefault(require("../unordered"));
const item_1 = tslib_1.__importDefault(require("../item"));
const utils_2 = require("./utils");
const defaultObjectRenderer = {};
const defaultProps = {
    rootClass: 'list',
    objectRenderer: defaultObjectRenderer,
};
const List = (props) => {
    const { ordered, rootClass, styled } = props;
    const children = utils_2.insertKeys(rootClass, renderBody(props));
    const className = classnames_1.default(rootClass, { [`${rootClass}-unstyled`]: !styled });
    if (ordered) {
        return react_1.default.createElement(ordered_1.default, { className: className }, children);
    }
    return react_1.default.createElement(unordered_1.default, { className: className }, children);
};
List.defaultProps = defaultProps;
exports.default = List;
const renderBody = (_a) => {
    var { data, objectRenderer: { verbose, indent } } = _a, props = tslib_1.__rest(_a, ["data", "objectRenderer"]);
    if (utils_1.hasChildren(props)) {
        return data.map(props.children);
    }
    if (utils_1.hasRender(props)) {
        return data.map(props.render).map(value => react_1.default.createElement(item_1.default, null, utils_2.mapRenderedOutput(value, verbose, indent)));
    }
    return data.map(item => react_1.default.createElement(item_1.default, null, item));
};
//# sourceMappingURL=index.js.map