import React from 'react';
import { Column } from './types';
declare const defaultProps: {
    rootClass: string;
};
declare type Props<T> = {
    data: T[];
    columns: Column<keyof T, T>[];
    columnHeader?: boolean;
    rotate?: boolean;
    stretched?: boolean;
    onRowClick?: (item: T, e: React.MouseEvent<HTMLTableRowElement>) => void;
} & typeof defaultProps;
declare const Table: {
    <T extends {}>({ columnHeader, columns, data, rootClass, rotate, stretched, onRowClick }: Props<T>): JSX.Element;
    defaultProps: {
        rootClass: string;
    };
};
export default Table;
