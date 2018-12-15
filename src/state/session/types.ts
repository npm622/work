import { StitchUser, StitchServiceErrorCode } from 'mongodb-stitch-browser-sdk';

export interface EmailPassword {
  email: string;
  password: string;
}

export interface SessionError {
  name: string;
  message: string;
  code?: StitchServiceErrorCode;
}

export interface SessionState {
  user?: StitchUser;
  error?: SessionError;
}

export const initialSessionState: SessionState = {};
