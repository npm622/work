/// <reference types="react" />
interface Props {
    homeUrl: string;
    links: {
        [key: string]: string;
    };
    search?: string;
    resetPassword: (token: string, tokenId: string, password: string) => any;
}
declare const ResetPasswordPage: ({ homeUrl, links, search, resetPassword }: Props) => JSX.Element;
export default ResetPasswordPage;
