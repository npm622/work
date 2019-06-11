/// <reference types="react" />
interface Props {
    email?: string;
    homeUrl: string;
    links: {
        [key: string]: string;
    };
    sendPasswordReset: (email: string) => any;
}
declare const PasswordResetPage: ({ email, homeUrl, links, sendPasswordReset }: Props) => JSX.Element;
export default PasswordResetPage;
