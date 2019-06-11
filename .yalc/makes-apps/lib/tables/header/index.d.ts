/// <reference types="react" />
import { TableHeaderProps } from './types';
declare const defaultProps: {
    className: string;
};
declare type Props = {
    headers: TableHeaderProps[];
} & typeof defaultProps;
declare const TableHeader: ({ className, headers }: Props) => JSX.Element;
export default TableHeader;
