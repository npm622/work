/// <reference types="react" />
declare const defaultProps: {
    className: string;
    display: string;
};
declare type Props = {
    submittable: boolean;
} & typeof defaultProps;
declare const FormSubmit: {
    ({ className, display, submittable }: Props): JSX.Element;
    defaultProps: {
        className: string;
        display: string;
    };
};
export default FormSubmit;
