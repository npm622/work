import React from 'react';
import { RenderChildren } from './types';
interface ObjectRenderer {
    indent?: number;
    verbose?: boolean;
}
declare const defaultProps: {
    rootClass: string;
    objectRenderer: ObjectRenderer;
};
export declare type Props<T> = {
    data: T[];
    ordered?: boolean;
    styled?: boolean;
} & RenderChildren<T> & typeof defaultProps;
declare const List: {
    <T extends React.ReactNode>(props: Props<T>): JSX.Element;
    defaultProps: {
        rootClass: string;
        objectRenderer: ObjectRenderer;
    };
};
export default List;
