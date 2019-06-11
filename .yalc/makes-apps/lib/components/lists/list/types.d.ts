/// <reference types="react" />
declare type ChildrenProp<T> = {
    children: (item: T, i: number) => React.ReactNode;
};
export declare type RenderedOutput = boolean | number | string | object;
declare type RenderProp<T> = {
    render: (item: T, i: number) => RenderedOutput;
};
export declare type RenderChildren<T> = {} | ChildrenProp<T> | RenderProp<T>;
export {};
