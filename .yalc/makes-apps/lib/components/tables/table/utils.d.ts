export declare const normalizeAccessor: <K extends keyof T, T extends {}>(key: string, accessor?: string | ((item: T) => T[K]) | undefined) => (item: T) => T[K];
export declare const sortData: <T extends {}>(data: T[]) => T[];
export declare const toKey: <T extends {}>(item: T) => string;
