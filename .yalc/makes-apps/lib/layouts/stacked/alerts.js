"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var StackedAlerts = /** @class */ (function (_super) {
    tslib_1.__extends(StackedAlerts, _super);
    function StackedAlerts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedAlerts.prototype.componentDidUpdate = function (_a) {
        var prevAlerts = _a.alerts;
        var _b = this.props, ackAlert = _b.ackAlert, alerts = _b.alerts;
        var alert = next(alerts);
        var lastAlert = last(alerts);
        var prevAlert = next(prevAlerts);
        if (alert && !alert.dismissable && (!prevAlert || lastAlert.key !== prevAlert.key)) {
            setTimeout(function () { return ackAlert(); }, alert.displayForMillis);
        }
    };
    StackedAlerts.prototype.render = function () {
        var _a = this.props, ackAlert = _a.ackAlert, alerts = _a.alerts, parentClasser = _a.classer;
        var alert = next(alerts);
        var classer = parentClasser.new('alerts');
        if (!alert) {
            return react_1.default.createElement("div", { className: classnames_1.default(classer.name()) });
        }
        return (react_1.default.createElement("div", { className: classnames_1.default(classer.name(), classer.name(alert.type)) },
            react_1.default.createElement("p", { className: classer.name('text') }, alert.time.toDateString()),
            react_1.default.createElement("p", { className: classer.name('text') }, alert.time.toLocaleTimeString()),
            react_1.default.createElement("p", { className: classer.name('text') }, alert.type.toUpperCase()),
            react_1.default.createElement("p", { className: classer.name('text') }, alert.message),
            alert.action && (react_1.default.createElement("button", { className: classer.name('action'), onClick: alert.action.onClick }, alert.action.display)),
            alert.confirmable && (react_1.default.createElement("button", { className: classer.name('confirm'), onClick: ackAlert }, "ok")),
            alert.dismissable && (react_1.default.createElement("button", { className: classer.name('dismiss'), onClick: ackAlert }, "dismiss"))));
    };
    return StackedAlerts;
}(react_1.default.Component));
//
// const StackedAlerts = ({ ackAlert, alerts, classer: parentClasser }: Props) => {
//   const classer = parentClasser.new('alerts');
//
//   const [alert, setAlert] = React.useState(next(alerts));
//
//   if (!alert) {
//     return <div className={classNames(classer.name())} />;
//   }
//
//   React.useEffect(
//     () => {
//       const nextAlert = next(alerts);
//       if (nextAlert && !alert && !nextAlert.dismissable) {
//         setTimeout(() => {
//           setAlert(undefined);
//         }, nextAlert.displayForMillis);
//       }
//     },
//     [alert]
//   );
//
//   return (
//     <div className={classNames(classer.name(), classer.name(alert.type))}>
//       <p className={classer.name('text')}>{alert.time.toDateString()}</p>
//       <p className={classer.name('text')}>{alert.time.toLocaleTimeString()}</p>
//       <p className={classer.name('text')}>{alert.type.toUpperCase()}</p>
//       <p className={classer.name('text')}>{alert.message}</p>
//       {alert.action && (
//         <button className={classer.name('action')} onClick={alert.action.onClick}>
//           {alert.action.display}
//         </button>
//       )}
//       {alert.confirmable && (
//         <button className={classer.name('confirm')} onClick={ackAlert}>
//           ok
//         </button>
//       )}
//       {alert.dismissable && (
//         <button className={classer.name('dismiss')} onClick={ackAlert}>
//           dismiss
//         </button>
//       )}
//     </div>
//   );
// };
var next = function (alerts) {
    if (alerts.length === 0) {
        return;
    }
    return alerts[0];
};
var last = function (alerts) {
    if (alerts.length === 0) {
        return;
    }
    return alerts[alerts.length - 1];
};
exports.default = StackedAlerts;
//# sourceMappingURL=alerts.js.map