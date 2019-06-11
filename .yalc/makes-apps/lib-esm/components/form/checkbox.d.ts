/// <reference types="react" />
declare const defaultProps: {
    className: string;
};
declare type Props<OPTIONS extends {
    [key: string]: string;
}> = {
    options: OPTIONS;
    values: string[];
    onChange: (k: keyof OPTIONS) => void;
} & typeof defaultProps;
declare const CheckboxInput: {
    <OPTIONS extends {
        [key: string]: string;
    }>({ className, options, values, onChange, }: Props<OPTIONS>): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default CheckboxInput;
