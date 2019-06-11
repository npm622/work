/// <reference types="react" />
export declare type TableData = boolean | number | string | object;
declare type ChildrenProp<T extends {}, K extends keyof T> = {
    children: (...api: RenderApi<T, K>) => React.ReactNode;
};
declare type RenderProp<T extends {}, K extends keyof T> = {
    render: (...api: RenderApi<T, K>) => TableData;
};
export declare type RenderApi<T extends {}, K extends keyof T> = [{
    value: T[K];
    item: T;
}, {
    accessor: K;
    idx: number;
}];
export declare type RenderChildren<T extends {}, K extends keyof T> = {} | ChildrenProp<T, K> | RenderProp<T, K>;
export {};
