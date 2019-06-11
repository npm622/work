/// <reference types="react" />
export declare class Classer {
    private prefix;
    constructor(prefix: string);
    name(className?: string): string;
    new(prefix: string): Classer;
}
declare type Function<T> = T extends (...args: any[]) => any ? T : never;
export declare const isFunction: <T extends {}>(prop: T) => prop is Function<T>;
declare type ChildrenProp<T, ARGS extends any[]> = T extends {
    children: (...props: ARGS) => React.ReactNode;
} ? T : never;
export declare const hasChildren: <T extends {}, ARGS extends any[]>(props: T) => props is ChildrenProp<T, ARGS>;
declare type RenderProp<T, ARGS extends any[]> = T extends {
    render: (...props: ARGS) => React.ReactNode;
} ? T : never;
export declare const hasRender: <T extends {}, ARGS extends any[]>(props: T) => props is RenderProp<T, ARGS>;
export {};
