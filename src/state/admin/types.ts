import BSON from 'bson';
import { StitchUser } from 'mongodb-stitch-browser-sdk';

export type AlertType = 'success' | 'warn' | 'error' | 'info' | 'debug';

export const Alert = (type: AlertType, message: string, ackTime = 0) => ({
  _id: new BSON.ObjectId(),
  time: new Date().toLocaleString(),
  type,
  message,
  ackTime,
});

export interface Alert extends ReturnType<typeof Alert> {}

export interface EmailPassword {
  email: string;
  password: string;
}

export interface ConfirmPassword {
  password: string;
  confirmPassword: string;
}

export type ConfirmEmailPassword = EmailPassword & ConfirmPassword;

export interface TokenData {
  token: string;
  tokenId: string;
}

export interface VerifiedTokenData extends TokenData {
  password: string;
}

export const AdminState = () => ({
  loading: false,
  user: undefined as StitchUser | undefined,
  alerts: [] as Alert[],
});

export interface AdminState extends ReturnType<typeof AdminState> {}
