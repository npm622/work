import React from 'react';
import {
  emailValidator,
  Button,
  Flex,
  Form,
  FormControl,
  FormFooter,
  FormGroup,
  FormInput,
  FormLabel,
} from '@makes-apps/lib';

import connectors from '../../connectors';
import { contactsActions, ContactsActions } from '../../store';

interface StateProps {}

interface DispatchProps {
  saveContact: ContactsActions['create'];
}

type Props = StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  render() {
    const { saveContact } = this.props;
    return (
      <Flex direction="column" alignItems="center" flexGrow="1">
        <Form
          initialData={{ from: '', message: '' }}
          onSubmit={data => saveContact({ ...data, timestamp: new Date() })}
          validation={{ from: emailValidator() }}
        >
          {({ data, handlers, statuses }) => (
            <>
              <FormGroup>
                <FormControl name="from" inline size="300px">
                  <FormLabel>Your email:</FormLabel>
                  <FormInput value={data.from} status={statuses.from} onChange={handlers.input.onChange} />
                </FormControl>
                <FormControl name="message">
                  <FormLabel>Message:</FormLabel>
                  <FormInput
                    as="textarea"
                    rows={10}
                    value={data.message}
                    status={statuses.message}
                    onChange={handlers.input.onChange}
                  />
                </FormControl>
              </FormGroup>
              <FormFooter align="center">
                <Button as="button" type="submit" color="primary" variant="ghost">
                  Send message
                </Button>
              </FormFooter>
            </>
          )}
        </Form>
      </Flex>
    );
  }
}

export default connectors.withDispatchObject(({}) => ({}), {
  saveContact: contactsActions.create,
})(HomePage);
