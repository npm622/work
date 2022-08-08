import React from 'react';
import { Button, Card, Database, Flex } from '@makes-apps/lib';

import { RootConnectors } from '../../root';
import { blogsActions, contactsActions, BlogsActions, ContactsActions } from '../../store';
import { Blog, Contact, User } from '../../types';

import urls from '../../urls';

interface StateProps {
  blogs: Database<Blog>;
  contacts: Database<Contact>;
  user?: User;
}

interface DispatchProps {
  listBlogs: BlogsActions['list'];
  listContacts: ContactsActions['list'];
}

type Props = StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  componentDidMount() {
    const { listBlogs, listContacts } = this.props;
    Promise.all([listBlogs({}), listContacts({})]);
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

export default RootConnectors.withDispatchObject(
  ({ auth, blogs, contacts }) => ({
    user: auth.user,
    blogs: blogs.db,
    contacts: contacts.db,
  }),
  {
    listBlogs: blogsActions.list,
    listContacts: contactsActions.list,
  }
)(HomePage);
