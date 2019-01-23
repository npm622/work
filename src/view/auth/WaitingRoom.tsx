import React from 'react';

interface Props {
  email: 'confirmationEmail' | 'passwordResetEmail';
}

const CONFIRMATION_EMAIL = 'confirmation';
const PASSWORD_RESET_EMAIL = 'password_reset';

const STITCH_EMAIL_ADDRESS = 'no-reply+stitch@mongodb.com';

const emailTopic = (email: string) => {
  if (email === CONFIRMATION_EMAIL) {
    return 'a confirmation email';
  }
  if (email === PASSWORD_RESET_EMAIL) {
    return 'a password reset email';
  }
  return 'an email';
};

class WaitingRoom extends React.Component<Props> {
  render() {
    const { email } = this.props;
    return (
      <div className="waiting-room">
        <h1 className="waiting-room-header">waiting room</h1>
        <p className="waiting-room-blurb">
          {`${emailTopic(email)} has been sent to your inbox by `}
          <span className="waiting-room-blurb-email">{STITCH_EMAIL_ADDRESS}</span>
          {`.  you must click the link provided in that email to proceed.  you can close this window if you wish.`}
        </p>
      </div>
    );
  }
}

export default WaitingRoom;
