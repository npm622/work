/// <reference types="react" />
declare const defaultProps: {
    className: string;
    rows: number;
    onBlur: (_v: string) => void;
    onFocus: (_v: string) => void;
};
declare type Props = {
    placeholder?: string;
    onChange: (v: string) => void;
} & typeof defaultProps;
declare const TextareaInput: {
    ({ className, onChange, onBlur, onFocus, ...rest }: Props): JSX.Element;
    defaultProps: {
        className: string;
        rows: number;
        onBlur: (_v: string) => void;
        onFocus: (_v: string) => void;
    };
};
export default TextareaInput;
