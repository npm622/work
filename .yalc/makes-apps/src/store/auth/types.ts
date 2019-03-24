import { BSON, StitchUser } from 'mongodb-stitch-browser-sdk';

export class AuthState<U extends User> {
  constructor(public stitch: StitchUser | undefined = undefined, public user: U | null = null) {}
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
