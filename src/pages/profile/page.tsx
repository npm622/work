import React from 'react';
import {
  useHeadline,
  Button,
  Card,
  DataTable,
  Flex,
  Form,
  FormControl,
  FormFooter,
  FormGroup,
  FormInput,
  FormLabel,
  Text,
} from '@makes-apps/lib';

import { UsersActions } from '../../store';
import { Contact, User } from '../../types';

interface Props {
  user: User;
  contacts: Contact[];
  saveUser: UsersActions['update'];
}

const headline = (user: User) =>
  `Hey there ${user.first_name ? `${user.first_name}${user.last_name ? ` ${user.last_name}` : ''}` : user.email}`;

const Status = ({ children }: { children?: string }) => (
  <Text size="deci" color="info" weight="semiBold">
    {`Head's up: ${children}`}
  </Text>
);

const Page = ({ contacts, saveUser, user }: Props) => {
  const { setHeadline } = useHeadline();

  React.useEffect(() => {
    setHeadline(headline(user));
    return () => setHeadline();
  }, [user]);

  return (
    <Flex flexGrow="1" direction="column" alignItems="center" overflow="auto">
      <Card color="info" fillHeader title="User Data" topMargin bottomMargin>
        <Text size="deci" color="debug">
          Feel free to update your user data in this section. Everything here can be considered optional ... it's purely
          aesthetics.
        </Text>
        {user.type === 'me' && <Status>(got heeeeem!!!)</Status>}
        {user.type === 'admin' && <Status>you have admin privileges ... you're kind of a big deal around here.</Status>}
        <Form
          initialData={{ name: user.name, first_name: user.first_name || '', last_name: user.last_name || '' }}
          onSubmit={data => saveUser({ ...user, ...data })}
          validation={{
            name: () => ({}), // TODO: should make function call to make sure username is available
          }}
        >
          {({ data, setField }) => (
            <>
              <FormGroup>
                <FormControl name="name">
                  <FormLabel>Your username is:</FormLabel>
                  <FormInput value={data.name} onChange={e => setField('name', e.target.value)} />
                </FormControl>
              </FormGroup>
              <FormGroup inline>
                <FormControl name="firstName">
                  <FormLabel>first name</FormLabel>
                  <FormInput value={data.first_name} onChange={e => setField('first_name', e.target.value)} />
                </FormControl>
                <FormControl name="lastName">
                  <FormLabel>last name</FormLabel>
                  <FormInput value={data.last_name} onChange={e => setField('last_name', e.target.value)} />
                </FormControl>
              </FormGroup>
              <FormFooter align="center">
                <Button as="button" color="secondary" variant="text">
                  Dismiss
                </Button>
                <Button as="button" type="submit" color="primary" variant="ghost">
                  Save
                </Button>
              </FormFooter>
            </>
          )}
        </Form>
      </Card>
      <Flex margin="0 0 1rem 0">
        <Card color="debug" size="s" title="User Activity" maxHeight="270px" rightMargin>
          <DataTable
            data={user.activity}
            columns={[
              { header: 'type' },
              { header: 'time', render: ({ value }) => (value ? value.toISOString() : 'n/a') },
            ]}
          />
        </Card>
        <Card color="debug" size="s" title="User Messages" maxHeight="270px">
          {contacts.length === 0 && <Text>No messages sent</Text>}
          {contacts.length > 0 && (
            <DataTable
              data={contacts}
              columns={[
                { header: 'timestamp', render: ({ value }) => (value ? value.toISOString() : 'n/a') },
                { header: 'message' },
              ]}
            />
          )}
        </Card>
      </Flex>
    </Flex>
  );
};

export default Page;
