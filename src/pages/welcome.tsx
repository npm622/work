import React from 'react';
import { connect } from 'react-redux';
import { Button, StackedPage } from '@makes-apps/lib';
import { AppState, AppUrls } from '../app';
import { User } from '../store/users';

interface Props {
  user?: User;
}

class WelcomePage extends React.Component<Props> {
  render() {
    return (
      <StackedPage title="What Makes Life For You?">
        <Button
          as="Link"
          to={AppUrls.home}
          size="tera"
          color="primary"
          radius="mega"
          shape="rounded"
          variant="floating"
          width="femto"
        >
          Enter
        </Button>
      </StackedPage>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => ({ user: auth.user });

export default connect(mapStateToProps)(WelcomePage);
