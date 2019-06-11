import React from 'react';
import { connect } from 'react-redux';
import { StackedPage, Text, YogiFactory } from '@makes-apps/lib';
import { AppState } from '../app';
import { User } from '../store/users';

interface Props {
  user?: User;
}

class AdminPage extends React.Component<Props> {
  render() {
    return (
      <StackedPage title={YogiFactory()}>
        <Text>i'm the admin page</Text>
      </StackedPage>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => ({ user: auth.user });

export default connect(mapStateToProps)(AdminPage);
