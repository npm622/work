import React from 'react';
import { Form, FormControl, TextInput, FormSubmit } from '../../../components';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  sendEmailConfirmation: (email: string) => any;
  onSuccess: () => any;
}

const EmailConfirmationPage = ({ links, sendEmailConfirmation, onSuccess }: Props) => (
  <Page type="stacked">
    {({ ...baseProps }) => (
      <>
        <StackedPageLinks {...baseProps} links={links} />
        <StackedPageContent {...baseProps}>
          <h1 className="stacked-page-content-header">email confirmation</h1>
          <Form
            initialForm={{ email: '' }}
            onSubmit={({ data }) => Promise.resolve(sendEmailConfirmation(data.email)).then(onSuccess)}
          >
            {({ classer, errors, submittable, setFormKey, validateForm }) => [
              <FormControl classer={classer} label="email" error={errors.email}>
                <TextInput
                  type="email"
                  placeholder="liam@gmail.com"
                  onBlur={() => validateForm('email')}
                  onChange={email => setFormKey('email', email)}
                />
              </FormControl>,
              <FormSubmit className={classer.name('submit')} submittable={submittable} />,
            ]}
          </Form>
        </StackedPageContent>
      </>
    )}
  </Page>
);

export default EmailConfirmationPage;
