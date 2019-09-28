import React from 'react';
import { Database } from '@makes-apps/lib';

import { contactsActions, usersActions, ContactsActions, UsersActions } from '../../store';
import { Contact, User } from '../../types';

import connectors from '../../connectors';

import Page from './page';

interface StateProps {
  userEmail?: string;
  contacts: Database<Contact>;
  users: Database<User>;
}

interface DispatchProps {
  listContacts: ContactsActions['list'];
  updateUser: UsersActions['update'];
}

type Props = StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  componentDidMount() {
    this.props.listContacts({});
  }

  render() {
    const { contacts, updateUser, userEmail, users } = this.props;

    const user = Object.values(users || {}).find(({ email }) => email === userEmail);

    if (!user) {
      return <>loading...</>;
    }

    const userContacts = Object.values(contacts || {}).filter(({ from }) => from === user.email);

    return <Page contacts={userContacts} saveUser={updateUser} user={user} />;
  }
}

export default connectors.withDispatchObject(
  ({ auth, contacts, users }) => ({
    userEmail: auth.userEmail,
    contacts: contacts.db,
    users: users.db,
  }),
  {
    listContacts: contactsActions.list,
    updateUser: usersActions.update,
  }
)(HomePage);
