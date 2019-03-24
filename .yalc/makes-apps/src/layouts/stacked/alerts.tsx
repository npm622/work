import React from 'react';
import classNames from 'classnames';
import { Alert } from '../../store/admin';
import { Classer } from '../../components/utils';

interface Props {
  ackAlert: () => void;
  alerts: Alert[];
  classer: Classer;
}

class StackedAlerts extends React.Component<Props> {
  componentDidUpdate({ alerts: prevAlerts }: Props) {
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
      return <div className={classNames(classer.name())} />;
    }

    return (
      <div className={classNames(classer.name(), classer.name(alert.type))}>
        <p className={classer.name('text')}>{alert.time.toDateString()}</p>
        <p className={classer.name('text')}>{alert.time.toLocaleTimeString()}</p>
        <p className={classer.name('text')}>{alert.type.toUpperCase()}</p>
        <p className={classer.name('text')}>{alert.message}</p>
        {alert.action && (
          <button className={classer.name('action')} onClick={alert.action.onClick}>
            {alert.action.display}
          </button>
        )}
        {alert.confirmable && (
          <button className={classer.name('confirm')} onClick={ackAlert}>
            ok
          </button>
        )}
        {alert.dismissable && (
          <button className={classer.name('dismiss')} onClick={ackAlert}>
            dismiss
          </button>
        )}
      </div>
    );
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

const next = (alerts: Alert[]) => {
  if (alerts.length === 0) {
    return;
  }
  return alerts[0];
};

export default StackedAlerts;
