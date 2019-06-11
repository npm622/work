"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_stitch_browser_sdk_1 = require("mongodb-stitch-browser-sdk");
exports.ADMIN = 'admin';
class AdminState {
    constructor(working = 0, alerts = [], background = exports.SolidBackground('#fff')) {
        this.working = working;
        this.alerts = alerts;
        this.background = background;
    }
}
exports.AdminState = AdminState;
exports.Alert = (...[type, message, options]) => ({
    key: new mongodb_stitch_browser_sdk_1.BSON.ObjectID().toHexString(),
    type,
    time: new Date(),
    message,
    action: options.action,
    confirmable: options.confirmable,
    dismissable: options.dismissable,
    displayForMillis: options.displayForMillis,
});
exports.SolidBackground = (fillColor) => ({
    type: 'solid',
    fillColor,
});
exports.GradientBackground = (direction, colorStops) => ({
    type: 'linear_gradient',
    direction,
    colorStops,
});
exports.ImageBackground = (url) => ({
    type: 'image',
    url,
});
//# sourceMappingURL=types.js.map