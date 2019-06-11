/// <reference types="react" />
interface Props {
    links: {
        [key: string]: string;
    };
    loginUrl: string;
    search?: string;
    confirmEmail: (token: string, tokenId: string) => any;
}
declare const ConfirmEmailPage: ({ links, loginUrl, search, confirmEmail }: Props) => JSX.Element;
export default ConfirmEmailPage;
