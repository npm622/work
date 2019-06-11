"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var RootErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(RootErrorBoundary, _super);
    function RootErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    RootErrorBoundary.getDerivedStateFromError = function (error) {
        return { error: error };
    };
    RootErrorBoundary.prototype.componentDidCatch = function (error, info) {
        console.log("caught error: " + JSON.stringify(error));
        console.log(info);
    };
    RootErrorBoundary.prototype.render = function () {
        var error = this.state.error;
        if (error) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h1", { className: "error-boundary-title" }, "Oops...this error is no yolk!"),
                react_1.default.createElement("p", { className: "error-boundary-advice" }, "Try refreshing the page. If the problem persists, then we are already aware of this issue. Hang tight!"),
                react_1.default.createElement("div", { className: "error-boundary-details" },
                    react_1.default.createElement("h2", { className: "error-boundary-details-title" }, error.name + ":"),
                    react_1.default.createElement("pre", { className: "error-boundary-details-message" }, error.message))));
        }
        return this.props.children;
    };
    return RootErrorBoundary;
}(react_1.default.Component));
exports.default = RootErrorBoundary;
//# sourceMappingURL=root.js.map