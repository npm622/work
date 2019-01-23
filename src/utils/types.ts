import React from 'react';

type IsFunction<T> = T extends (...args: any[]) => any ? T : never;

export const isFunction = <T extends Function>(value: T): value is IsFunction<T> => typeof value === 'function';

type HasRenderProp<T> = T extends { render: (props: any) => React.ReactNode } ? T : never;

export const hasRenderFunc = <T extends {}>(value: T): value is HasRenderProp<T> =>
  'render' in value && isFunction((value as HasRenderProp<T>).render);

type HasChildrenProp<T> = T extends { children: (props: any) => React.ReactNode } ? T : never;

export const hasChildrenFunc = <T extends {}>(value: T): value is HasChildrenProp<T> =>
  'children' in value && isFunction((value as HasChildrenProp<T>).children);
