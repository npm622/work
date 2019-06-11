"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const tooltip_1 = require("../tooltip");
const defaultProps = {
    className: '',
    infoIcon: 'info-circle',
};
const FormControl = ({ active, children: child, className, classer: parentClasser, infoIcon, label, description, dirty, error, status, playback, }) => {
    const classer = parentClasser.new('control');
    return (react_1.default.createElement("div", { className: classnames_1.default(className, classer.name(), { [classer.name('is-active')]: active }, { [classer.name('is-dirty')]: dirty }, { [classer.name('is-error')]: error }) },
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