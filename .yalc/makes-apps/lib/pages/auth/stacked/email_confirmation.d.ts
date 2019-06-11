/// <reference types="react" />
interface Props {
    links: {
        [key: string]: string;
    };
    loginUrl: string;
    sendEmailConfirmation: (email: string) => any;
}
declare const EmailConfirmationPage: ({ links, loginUrl, sendEmailConfirmation }: Props) => JSX.Element;
export default EmailConfirmationPage;
