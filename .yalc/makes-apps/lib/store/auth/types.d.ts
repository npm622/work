import { BSON } from 'mongodb-stitch-browser-sdk';
export declare const AUTH = "auth";
export declare class AuthState<U extends User> {
    stitch: {
        id: string;
        email?: string;
    } | undefined;
    user: U | null;
    constructor(stitch?: {
        id: string;
        email?: string;
    } | undefined, user?: U | null);
}
export interface User {
    _id: BSON.ObjectId;
    type: string;
    email: string;
    createdOn: Date;
    lastLogin: Date;
    deleted?: boolean;
    deletedOn?: boolean;
}
export interface EmailPassword {
    email: string;
    password: string;
}
export interface Registration extends EmailPassword {
    confirmPassword: string;
}
export interface TokenData {
    token: string;
    tokenId: string;
}
export interface PasswordTokenData extends TokenData {
    password: string;
}
