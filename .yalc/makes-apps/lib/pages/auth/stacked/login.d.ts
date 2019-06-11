/// <reference types="react" />
interface Props {
    links: {
        [key: string]: string;
    };
    login: (email: string, password: string) => any;
}
declare const LoginPage: ({ links, login }: Props) => JSX.Element;
export default LoginPage;
