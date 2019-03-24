import React from 'react';
import { Form, FormControl, TextInput, FormSubmit } from '../../../components';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  sendPasswordReset: (email: string) => any;
  onSuccess: () => any;
}

const PasswordResetPage = ({ links, sendPasswordReset, onSuccess }: Props) => (
  <Page type="stacked">
    {({ ...baseProps }) => (
      <>
        <StackedPageLinks {...baseProps} links={links} />
        <StackedPageContent {...baseProps}>
          <h1 className="stacked-page-content-header">password reset</h1>
          <Form
            initialForm={{ email: '' }}
            onSubmit={({ data }) => Promise.resolve(sendPasswordReset(data.email)).then(onSuccess)}
          >
            {({ classer, errors, submittable, setFormKey, validateForm }) => [
              <FormControl classer={classer} label="email" error={errors.email}>
                <TextInput
                  type="email"
                  placeholder="abigail@gmail.com"
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

export default PasswordResetPage;
