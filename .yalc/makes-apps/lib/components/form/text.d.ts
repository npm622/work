/// <reference types="react" />
declare const defaultProps: {
    className: string;
    type: "password" | "text" | "email";
    onBlur: (_v: string) => void;
    onFocus: (_v: string) => void;
};
declare type Props = {
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (v: string) => void;
} & typeof defaultProps;
declare const TextInput: {
    ({ className, type, onChange, onBlur, onFocus, ...rest }: Props): JSX.Element;
    defaultProps: {
        className: string;
        type: "password" | "text" | "email";
        onBlur: (_v: string) => void;
        onFocus: (_v: string) => void;
    };
};
export default TextInput;
