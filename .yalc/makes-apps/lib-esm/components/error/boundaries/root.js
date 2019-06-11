"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
class RootErrorBoundary extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, info) {
        console.log(`caught error: ${JSON.stringify(error)}`);
        console.log(info);
    }
    render() {
        const { error } = this.state;
        if (error) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h1", { className: "error-boundary-title" }, "Oops...this error is no yolk!"),
                react_1.default.createElement("p", { className: "error-boundary-advice" }, "Try refreshing the page. If the problem persists, then we are already aware of this issue. Hang tight!"),
                react_1.default.createElement("div", { className: "error-boundary-details" },
                    react_1.default.createElement("h2", { className: "error-boundary-details-title" }, `${error.name}:`),
                    react_1.default.createElement("pre", { className: "error-boundary-details-message" }, error.message))));
        }
        return this.props.children;
    }
}
exports.default = RootErrorBoundary;
//# sourceMappingURL=root.js.map