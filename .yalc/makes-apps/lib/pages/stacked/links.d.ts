/// <reference types="react" />
import { Classer } from '../../components/utils';
declare const defaultProps: {
    links: {
        [key: string]: string;
    };
};
declare type Props = {
    classer: Classer;
} & typeof defaultProps;
declare const StackedPageLinks: {
    ({ classer: parentClasser, links }: Props): JSX.Element;
    defaultProps: {
        links: {
            [key: string]: string;
        };
    };
};
export default StackedPageLinks;
