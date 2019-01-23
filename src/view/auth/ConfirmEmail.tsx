import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import { push } from 'connected-react-router';
import queryString from 'query-string';
import { urls } from '../../utils';
import { AppState, TokenData, confirmEmail } from '../../state';

interface StateProps {
  search: string;
}

interface DispatchProps {
  confirmEmail: (data: TokenData) => Promise<void>;
}

type Props = StateProps & DispatchProps;

class ConfirmEmail extends React.Component<Props> {
  ['parseTokenData'] = () => {
    const { token, tokenId } = queryString.parse(this.props.search);
    if (token && tokenId) {
      return { token: token as string, tokenId: tokenId as string };
    }
    return;
  };

  render() {
    const { confirmEmail } = this.props;

    const tokenData = this.parseTokenData();
    if (tokenData) {
      confirmEmail(tokenData);
      return <Redirect to={urls.login()} />;
    }

    return (
      <div className="confirm-email">
        <h1 className="confirm-email-header">email confirmed</h1>
        <p className="confirm-email-blurb">
          thank you for confirming your email with us. you may now log in to the site.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ router }: AppState) => ({
  search: router.location.search,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoWelcome: () => dispatch(push(urls.welcome())),
  confirmEmail: (data: TokenData) => dispatch<any>(confirmEmail.action(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmEmail);
