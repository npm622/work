import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { Page, StackedPageLinks, StackedPageContent } from '../../../pages';

interface Props {
  links: { [key: string]: string };
  loginUrl: string;
  search?: string;
  confirmEmail: (token: string, tokenId: string) => any;
}

const parseSearch = (search?: string) => {
  if (!search) {
    return;
  }
  const { token, tokenId } = queryString.parse(search);

  return { token: token as string, tokenId: tokenId as string };
};

const ConfirmEmailPage = ({ links, loginUrl, search, confirmEmail }: Props) => {
  const data = parseSearch(search);
  if (data) {
    const { token, tokenId } = data;
    confirmEmail(token, tokenId);
    return <Redirect to={loginUrl} />;
  }
  return (
    <Page type="stacked">
      {({ ...baseProps }) => (
        <>
          <StackedPageLinks {...baseProps} links={links} />
          <StackedPageContent {...baseProps}>
            <h1 className="stacked-page-content-header">confirm email</h1>
            <p>thank you for waiting while we confirm your email...</p>
          </StackedPageContent>
        </>
      )}
    </Page>
  );
};

export default ConfirmEmailPage;
