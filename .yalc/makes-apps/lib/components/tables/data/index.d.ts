import React from 'react';
declare const defaultProps: {
    className: string;
};
declare type Props = {
    children: React.ReactNode;
} & typeof defaultProps;
declare const TableData: {
    ({ children, className }: Props): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default TableData;
