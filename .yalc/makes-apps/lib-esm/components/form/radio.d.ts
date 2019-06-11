/// <reference types="react" />
declare const defaultProps: {
    className: string;
};
declare type Props<OPTIONS extends {
    [key: string]: string;
}> = {
    name: string;
    options: OPTIONS;
    value: string;
    onChange: (v: keyof OPTIONS) => void;
} & typeof defaultProps;
declare const TextInput: {
    <OPTIONS extends {
        [key: string]: string;
    }>({ className, name, options, value: checkedValue, onChange, }: Props<OPTIONS>): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default TextInput;
