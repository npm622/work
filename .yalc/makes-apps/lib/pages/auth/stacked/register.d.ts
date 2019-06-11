/// <reference types="react" />
interface Props {
    links: {
        [key: string]: string;
    };
    loginUrl: string;
    register: (email: string, password: string) => any;
}
declare const RegisterPage: ({ links, loginUrl, register }: Props) => JSX.Element;
export default RegisterPage;
