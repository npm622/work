export interface AppException {
  errors: AppError[];
}

export interface AppError {
  type: AppErrorType;
  code: AppStatusCode;
  name: string;
  generalMessage?: string;
  detailedMessage?: string;
  causes: string[];
  timestamp: number;
  weight?: number;
}

export enum AppErrorType {
  CLIENT = "CLIENT",
  EGGCORN = "EGGCORN",
  MAPPING = "MAPPING",
  SERVICE = "SERVICE",
  STANDARD = "STANDARD",
  STARTUP = "STARTUP",
  VALIDATION = "VALIDATION"
}

export enum AppStatusCode {
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  NOT_ALLOWED = 'NOT_ALLOWED',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
  BACKEND_ERROR = 'BACKEND_ERROR',
}

export class MmdbClientError extends Error {
  public name: string = "ApgError";

  constructor(public type: string, public message: string) {
    super(`${type}: ${message}`);

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
