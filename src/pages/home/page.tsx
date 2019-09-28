import React from 'react';
import { Button, Card, Database, Flex } from '@makes-apps/lib';

import { blogsActions, contactsActions, usersActions, BlogsActions, ContactsActions, UsersActions } from '../../store';
import { Blog, Contact, User } from '../../types';

import connectors from '../../connectors';
import urls from '../../urls';

interface StateProps {
  userEmail?: string;
  blogs: Database<Blog>;
  contacts: Database<Contact>;
  users: Database<User>;
}

interface DispatchProps {
  listBlogs: BlogsActions['list'];
  listContacts: ContactsActions['list'];
  listUsers: UsersActions['list'];
}

type Props = StateProps & DispatchProps;

interface State {
  loginCardShowing?: boolean;
}

class HomePage extends React.Component<Props, State> {
  readonly state: State = {};

  loadData = () => {
    this.props.listBlogs({});
  };

  showLoginCard = (loginCardShowing: boolean) => this.setState(() => ({ loginCardShowing }));

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate({ userEmail: prevUserUser }: Props) {
    if (!prevUserUser && this.props.userEmail) {
      this.loadData();
    }
  }
  render() {
    return (
      <Flex flexGrow="1" direction="column" alignItems="center">
        <Card topMargin>
          <Flex justifyContent="space-around" minWidth="300px">
            <Button as="Link" to={urls.blogs().list()} variant="ghost">
              Thoughts
            </Button>
            <Button as="Link" to={urls.contact()} variant="ghost">
              Contact
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }
}

export default connectors.withDispatchObject(
  ({ auth, blogs, contacts, users }) => ({
    userEmail: auth.userEmail,
    blogs: blogs.db,
    contacts: contacts.db,
    users: users.db,
  }),
  {
    listBlogs: blogsActions.list,
    listContacts: contactsActions.list,
    listUsers: usersActions.list,
  }
)(HomePage);
