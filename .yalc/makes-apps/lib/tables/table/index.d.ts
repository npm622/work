/// <reference types="react" />
import { TableHeaderProps } from '../header/types';
import { RenderChildren } from './types';
interface ObjectRenderer {
    indent?: number;
    verbose?: boolean;
}
declare const defaultProps: {
    rootClass: string;
    objectRenderer: ObjectRenderer;
};
export declare type Props<T extends {}> = {
    data: T[];
    headers: TableHeaderProps[];
    rootClass?: string;
    objectRenderer?: ObjectRenderer;
} & RenderChildren<T, keyof T> & typeof defaultProps;
declare const Table: {
    <T extends {}>(props: Props<T>): JSX.Element;
    deafultProps: {
        rootClass: string;
        objectRenderer: ObjectRenderer;
    };
};
export default Table;
