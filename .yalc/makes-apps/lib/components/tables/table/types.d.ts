/// <reference types="react" />
interface BaseProps {
    key: string;
    className?: string;
}
export interface HeaderProps extends BaseProps {
    rotate?: boolean;
    sortable?: boolean;
}
export interface DataProps extends BaseProps {
}
interface DataRenderProps<K extends keyof T, T> extends DataProps {
    item: T;
    value: T[K];
}
export interface Column<K extends keyof T, T> {
    accessor?: string | ((item: T) => T[K]);
    empty?: React.ReactNode;
    header: string | ((props: HeaderProps) => React.ReactNode);
    key: K;
    render?: <K extends keyof T>(props: DataRenderProps<K, T>) => React.ReactNode;
    sortable?: boolean;
}
export {};
