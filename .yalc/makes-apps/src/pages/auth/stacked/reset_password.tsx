import React from 'react';
import queryString from 'query-string';
import { Form, FormControl, TextInput, FormSubmit } from '../../../components';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  search?: string;
  resetPassword: (token: string, tokenId: string, password: string) => any;
  onSuccess: () => any;
}

const parseSearch = (search?: string) => {
  if (!search) {
    return;
  }
  const { token, tokenId } = queryString.parse(search);

  return { token: token as string, tokenId: tokenId as string };
};

const ResetPasswordPage = ({ links, search, resetPassword, onSuccess }: Props) => {
  return (
    <Page type="stacked">
      {({ ...baseProps }) => (
        <>
          <StackedPageLinks {...baseProps} links={links} />
          <StackedPageContent {...baseProps}>
            <h1 className="stacked-page-content-header">reset password</h1>
            <Form
              initialForm={{ password: '' }}
              onSubmit={({ data: { password } }) => {
                const data = parseSearch(search);
                if (data) {
                  const { token, tokenId } = data;
                  Promise.resolve(resetPassword(token, tokenId, password)).then(onSuccess);
                }
              }}
            >
              {({ classer, errors, submittable, setFormKey, validateForm }) => [
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
};

export default ResetPasswordPage;
