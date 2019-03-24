import React from 'react';
import { Form, FormControl, TextInput, FormSubmit } from '../../../components';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  login: (email: string, password: string) => any;
}

const LoginPage = ({ links, login }: Props) => (
  <Page type="stacked">
    {({ ...baseProps }) => (
      <>
        <StackedPageLinks {...baseProps} links={links} />
        <StackedPageContent {...baseProps}>
          <h1 className="stacked-page-content-header">login</h1>
          <Form
            initialForm={{ email: '', password: '' }}
            onSubmit={({ data: { email, password } }) => login(email, password)}
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
              <FormControl classer={classer} label="password" error={errors.password}>
                <TextInput
                  type="password"
                  placeholder="password"
                  onBlur={() => validateForm('password')}
                  onChange={password => setFormKey('password', password)}
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

export default LoginPage;
