import React from 'react';
declare const defaultProps: {
    className: string;
};
export declare type Props = {
    children: React.ReactNode;
} & typeof defaultProps;
declare const OrderedList: {
    ({ children, className }: Props): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default OrderedList;
