import React from 'react';
/**
 *  insertKeys returns a mapped version of the provided children to include a key and enhanced className prop
 */
export declare const injectTableProps: (rootClass: string, children: React.ReactNode) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
export declare const mapTableData: (data: import("../../lists/list/types").RenderedOutput, verbose?: boolean, indent?: number) => string;
