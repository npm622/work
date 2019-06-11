"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var tooltip_1 = require("../tooltip");
var defaultProps = {
    className: '',
    infoIcon: 'info-circle',
};
var FormControl = function (_a) {
    var _b, _c, _d;
    var active = _a.active, child = _a.children, className = _a.className, parentClasser = _a.classer, infoIcon = _a.infoIcon, label = _a.label, description = _a.description, dirty = _a.dirty, error = _a.error, status = _a.status, playback = _a.playback;
    var classer = parentClasser.new('control');
    return (react_1.default.createElement("div", { className: classnames_1.default(className, classer.name(), (_b = {}, _b[classer.name('is-active')] = active, _b), (_c = {}, _c[classer.name('is-dirty')] = dirty, _c), (_d = {}, _d[classer.name('is-error')] = error, _d)) },
        (playback || playback === '') && (react_1.default.createElement("div", { className: classer.name('playback') },
            react_1.default.createElement("span", { className: classer.name('playback-header') }, "Selected:"),
            "\u00A0\u00A0",
            playback)),
        react_1.default.createElement("label", { className: classer.name('label') },
            react_1.default.createElement("span", { className: classer.name('label-title') }, label),
            "\u00A0",
            description && (react_1.default.createElement(tooltip_1.Tooltip, { className: classer.name('label-description'), clickable: true, orientation: "right", text: description },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: infoIcon }))))),
        react_1.default.createElement("div", { className: classer.name('status') },
            error && react_1.default.createElement("p", { className: classer.name('status-error') }, error),
            !error && status),
        react_1.default.cloneElement(child, { className: classnames_1.default(child.props.className, classer.name('input')) })));
};
FormControl.defaultProps = defaultProps;
exports.default = FormControl;
//# sourceMappingURL=control.js.map