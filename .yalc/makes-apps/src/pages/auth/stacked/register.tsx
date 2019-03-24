import React from 'react';
import { Form, FormControl, TextInput, FormSubmit } from '../../../components';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  register: (email: string, password: string) => any;
  onSuccess: () => any;
}

const RegisterPage = ({ links, register, onSuccess }: Props) => (
  <Page type="stacked">
    {({ ...baseProps }) => (
      <>
        <StackedPageLinks {...baseProps} links={links} />
        <StackedPageContent {...baseProps}>
          <h1 className="stacked-page-content-header">register</h1>
          <Form
            initialForm={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={({ data: { email, password } }) => Promise.resolve(register(email, password)).then(onSuccess)}
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
              <FormControl classer={classer} label="password" error={errors.password}>
                <TextInput
                  type="password"
                  placeholder="password"
                  onBlur={() => validateForm('password')}
                  onChange={password => setFormKey('password', password)}
                />
              </FormControl>,
              <FormControl classer={classer} label="confirm password" error={errors.confirmPassword}>
                <TextInput
                  type="password"
                  placeholder="confirm password"
                  onBlur={() => validateForm('confirmPassword')}
                  onChange={password => setFormKey('confirmPassword', password)}
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

export default RegisterPage;
