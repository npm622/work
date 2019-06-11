import React from 'react';
declare const defaultProps: {
    className: string;
};
declare type Props = {
    children: React.ReactNode;
    rotate?: boolean;
    sortable?: boolean;
} & typeof defaultProps;
declare const TableHeader: {
    ({ children: child, className, rotate, sortable }: Props): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default TableHeader;
