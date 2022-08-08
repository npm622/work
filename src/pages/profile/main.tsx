import React from 'react';
import { Database } from '@makes-apps/lib';

import { RootConnectors } from '../../root';
import { authActions, contactsActions, usersActions, ContactsActions, UsersActions } from '../../store';
import { Contact, User } from '../../types';

import Page from './page';

interface StateProps {
  user?: User;
  contacts: Database<Contact>;
}

interface DispatchProps {
  listContacts: ContactsActions['list'];
  setUser: (user: User) => void;
  updateUser: UsersActions['update'];
}

type Props = StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  componentDidMount() {
    this.props.listContacts({});
  }

  render() {
    const { contacts, setUser, updateUser, user } = this.props;

    if (!user) {
      return <>loading...</>;
    }

    const userContacts = Object.values(contacts || {}).filter(({ from }) => from === user.email);

    return (
      <Page
        contacts={userContacts}
        saveUser={user =>
          updateUser(user).then(res => {
            setUser(user);
            return res;
          })
        }
        user={user}
      />
    );
  }
}

export default RootConnectors.withDispatchObject(
  ({ auth, contacts }) => ({
    user: auth.user,
    contacts: contacts.db,
  }),
  {
    listContacts: contactsActions.list,
    setUser: authActions.setUser.creator.action,
    updateUser: usersActions.update,
  }
)(HomePage);
