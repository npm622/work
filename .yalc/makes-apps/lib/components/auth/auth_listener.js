"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
var StitchAuthListener = /** @class */ (function (_super) {
    tslib_1.__extends(StitchAuthListener, _super);
    function StitchAuthListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StitchAuthListener.prototype, "authListener", {
        get: function () {
            var _this = this;
            return {
                onAuthEvent: function (auth) { return _this.props.setUser(auth.user); },
            };
        },
        enumerable: true,
        configurable: true
    });
    StitchAuthListener.prototype.componentDidMount = function () {
        if (mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient) {
            mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient.auth.addAuthListener(this.authListener);
        }
        var _a = this.props, additionalSetup = _a.additionalSetup, stitch = _a.stitch, fetchUser = _a.fetchUser;
        if (stitch) {
            fetchUser(stitch.email || '');
        }
        additionalSetup();
    };
    StitchAuthListener.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, stitch = _a.stitch, fetchUser = _a.fetchUser;
        var prevStitch = prevProps.stitch;
        var prevEmail;
        if (prevStitch) {
            prevEmail = prevStitch.email;
        }
        if (stitch && stitch.email !== prevEmail) {
            fetchUser(stitch.email || '');
        }
    };
    StitchAuthListener.prototype.componentWillUnmount = function () {
        if (mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient) {
            mongodb_stitch_browser_sdk_1.Stitch.defaultAppClient.auth.removeAuthListener(this.authListener);
        }
    };
    StitchAuthListener.prototype.render = function () {
        return this.props.children;
    };
    return StitchAuthListener;
}(react_1.default.Component));
exports.default = StitchAuthListener;
//# sourceMappingURL=auth_listener.js.map