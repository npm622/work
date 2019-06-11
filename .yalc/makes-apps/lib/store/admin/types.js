"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
exports.ADMIN = 'admin';
var AdminState = /** @class */ (function () {
    function AdminState(working, alerts, background) {
        if (working === void 0) { working = 0; }
        if (alerts === void 0) { alerts = []; }
        if (background === void 0) { background = exports.SolidBackground('#fff'); }
        this.working = working;
        this.alerts = alerts;
        this.background = background;
    }
    return AdminState;
}());
exports.AdminState = AdminState;
exports.Alert = function () {
    var _a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _a[_i] = arguments[_i];
    }
    var type = _a[0], message = _a[1], options = _a[2];
    return ({
        key: new mongodb_stitch_browser_sdk_1.BSON.ObjectID().toHexString(),
        type: type,
        time: new Date(),
        message: message,
        action: options.action,
        confirmable: options.confirmable,
        dismissable: options.dismissable,
        displayForMillis: options.displayForMillis,
    });
};
exports.SolidBackground = function (fillColor) { return ({
    type: 'solid',
    fillColor: fillColor,
}); };
exports.GradientBackground = function (direction, colorStops) { return ({
    type: 'linear_gradient',
    direction: direction,
    colorStops: colorStops,
}); };
exports.ImageBackground = function (url) { return ({
    type: 'image',
    url: url,
}); };
//# sourceMappingURL=types.js.map