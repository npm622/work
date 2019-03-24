import React from 'react';
import classNames from 'classnames';
import { Alert } from '../../state';
import { FooterDisplay } from '.';

interface Props {
  loading: boolean;
  alerts: Alert[];
  ackAlert: () => void;
}

class Footer extends React.Component<Props> {
  componentDidUpdate({ alerts: prevAlerts }: Props) {
    const { ackAlert, alerts } = this.props;

    const prevActiveAlert = nextAlert(prevAlerts);
    const activeAlert = nextAlert(alerts);

    if (prevActiveAlert && activeAlert && prevActiveAlert._id.toHexString() === activeAlert._id.toHexString()) {
      return;
    }

    if (activeAlert && activeAlert.ackTime) {
      setTimeout(() => ackAlert(), activeAlert.ackTime);
    }
  }

  render() {
    const { ackAlert, alerts, loading } = this.props;
    const alert = nextAlert(alerts);
    return (
      <div className={appFooterClassNames(alert)}>
        <FooterDisplay loading={loading} alert={alert} ackAlert={() => {
          console.log(ackAlert());
        }} />
        {!alert && (
          <p>
            powered by{' '}
            <a href="https://docs.mongodb.com/stitch/" target="_blank" rel="noopener noreferrer">
              mongodb stitch
            </a>
          </p>
        )}
      </div>
    );
  }
}

const nextAlert = (alerts: Alert[]) => {
  if (alerts.length > 0) {
    return alerts[0];
  }
  return;
};

const appFooterClassNames = (alert?: Alert) =>
  classNames(
    'app-footer',
    alert && {
      'app-footer-success': alert.type === 'success',
      'app-footer-warn': alert.type === 'warn',
      'app-footer-error': alert.type === 'error',
      'app-footer-info': alert.type === 'info',
      'app-footer-debug': alert.type === 'debug',
    }
  );

export default Footer;
