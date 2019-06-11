import React from 'react';
import { Classer } from '../utils';
declare type FormStrings<T extends {}, K extends keyof T> = Partial<{
    [key in K]: string;
}>;
declare type FormBooleans<T extends {}, K extends keyof T> = Partial<{
    [key in K]: boolean;
}>;
declare type RenderApi<T extends {}> = ReturnType<Form<T>['renderApi']>;
declare type SubmitApi<T extends {}> = ReturnType<Form<T>['submitApi']>;
declare type FieldCleanChecker<T extends {}, K extends keyof T> = (value: T[K], clean: T[K]) => boolean;
declare type FieldValidChecker<T extends {}, K extends keyof T> = (value: T[K], data: T) => undefined | FormStrings<T, K> | Promise<FormStrings<T, K>>;
interface Validator<T extends {}, K extends keyof T> {
    isClean?: FieldCleanChecker<T, K>;
    isValid?: FieldValidChecker<T, K>;
}
declare type ValidationSchema<T extends {}> = {
    [key in keyof T]: Validator<T, key>;
};
declare type ChildElement = React.ReactElement<{
    className?: string;
}>;
declare const defaultProps: {
    redirects: {
        [key: string]: string;
    };
    rootClass: string;
};
declare type Props<T extends {}> = {
    initialForm: T;
    onSubmit?: (api: SubmitApi<T>) => any;
    validation?: ValidationSchema<T>;
    children: (api: RenderApi<T>) => ChildElement | ChildElement[];
} & typeof defaultProps;
interface State<T extends {}> {
    status: {
        pristine: boolean;
        redirect: string;
        submitting: boolean;
    };
    clean: T;
    data: T;
    dirty: FormBooleans<T, keyof T>;
    errors: FormStrings<T, keyof T>;
    touched: FormBooleans<T, keyof T>;
}
declare class Form<T extends {}> extends React.Component<Props<T>, State<T>> {
    static defaultProps: {
        redirects: {
            [key: string]: string;
        };
        rootClass: string;
    };
    readonly state: State<T>;
    constructor(props: Props<T>);
    ['submitApi']: () => {
        data: T;
        reset: (data?: Partial<T>, errors?: Partial<{ [key in keyof T]: string; }>) => void;
    };
    ['renderApi']: (classer: Classer) => {
        classer: Classer;
        status: {
            pristine: boolean;
            redirect: string;
            submitting: boolean;
        };
        data: T;
        dirty: Partial<{ [key in keyof T]: boolean; }>;
        errors: Partial<{ [key in keyof T]: string; }>;
        touched: Partial<{ [key in keyof T]: boolean; }>;
        reset: (data?: Partial<T>, errors?: Partial<{ [key in keyof T]: string; }>) => void;
        setFormKey: <K extends keyof T>(key: K, value: T[K]) => void;
        setFormData: (newData: Partial<T>) => void;
        validateForm: (key: keyof T) => void;
        submittable: boolean;
    };
    ['reset']: (data?: Partial<T>, errors?: Partial<{ [key in keyof T]: string; }>) => void;
    ['submit']: (e: React.FormEvent<HTMLFormElement>) => void;
    ['setFormKey']: <K extends keyof T>(key: K, value: T[K]) => void;
    ['setFormData']: (newData: Partial<T>) => void;
    ['validateForm']: (key: keyof T) => void;
    render(): JSX.Element;
}
export default Form;
