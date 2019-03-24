import React from 'react';
import { Stitch, StitchAuth, StitchUser } from 'mongodb-stitch-browser-sdk';
import { User } from '../../store/auth/types';

interface Props<U extends User> {
  stitch?: StitchUser;
  fetchUser: (email: string) => Promise<U | null>;
  setUser: (stitch?: StitchUser) => void;
}

class StitchAuthListener<U extends User> extends React.Component<Props<U>> {
  private get authListener() {
    return {
      onAuthEvent: (auth: StitchAuth) => this.props.setUser(auth.user),
    };
  }

  componentDidMount() {
    if (Stitch.defaultAppClient) {
      Stitch.defaultAppClient.auth.addAuthListener(this.authListener);
    }

    const { stitch, fetchUser } = this.props;
    if (stitch) {
      fetchUser(stitch.profile.email || '');
    }
  }

  componentDidUpdate(prevProps: Props<U>) {
    const { stitch, fetchUser } = this.props;
    const { stitch: prevStitch } = prevProps;

    let prevEmail;
    if (prevStitch) {
      prevEmail = prevStitch.profile.email;
    }

    if (stitch && stitch.profile.email !== prevEmail) {
      fetchUser(stitch.profile.email || '');
    }
  }

  componentWillUnmount() {
    if (Stitch.defaultAppClient) {
      Stitch.defaultAppClient.auth.removeAuthListener(this.authListener);
    }
  }

  render() {
    return this.props.children;
  }
}

export default StitchAuthListener;
