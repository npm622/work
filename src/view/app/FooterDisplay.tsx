import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '../../state';

interface Props {
  loading: boolean;
  alert?: Alert;
  ackAlert: () => void;
}

const FooterDisplay = ({ loading, alert, ackAlert }: Props) => (
  <div className="app-footer-display">
    <FontAwesomeIcon className="app-footer-display-icon" icon={appFooterIcon(alert)} size="2x" spin={loading} />
    {!loading && !alert && <p>makes'd on January 2, 2019</p>}
    {!loading && alert && (
      <div className="app-footer-display-alert">
        <p className="app-footer-display-alert-timestamp">{alert.time}</p>
        <p>{alert.message}</p>
        {!alert.ackTime && (
          <button className="app-footer-display-alert-dismiss" onClick={ackAlert}>
            dismiss
          </button>
        )}
      </div>
    )}
  </div>
);

const appFooterIcon = (alert?: Alert) => (alert ? alertIcon(alert) : 'baseball-ball');

const alertIcon = ({ type }: Alert) => {
  switch (type) {
    case 'success':
      return 'check-circle';
    case 'warn':
    case 'error':
      return 'exclamation-circle';
    case 'info':
    case 'debug':
      return 'info-circle';
  }
};

export default FooterDisplay;
