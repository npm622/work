"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
class StackedAlerts extends react_1.default.Component {
    componentDidUpdate({ alerts: prevAlerts }) {
        const { ackAlert, alerts } = this.props;
        const alert = next(alerts);
        if (alert && !alert.dismissable && prevAlerts.length === alerts.length - 1) {
            setTimeout(() => ackAlert(), alert.displayForMillis);
        }
    }
    render() {
        const { ackAlert, alerts, classer: parentClasser } = this.props;
        const alert = next(alerts);
        const classer = parentClasser.new('alerts');
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
    }
}
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
const next = (alerts) => {
    if (alerts.length === 0) {
        return;
    }
    return alerts[0];
};
exports.default = StackedAlerts;
//# sourceMappingURL=alerts.js.map