export type MakesErrorType = 'bad_request' | 'http' | 'test' | 'unknown';

export const MakesError = (type: MakesErrorType, message: string, code?: number) => ({
  type,
  code: code || defaultCode(type),
  message,
  timestamp: new Date(),
});

export interface MakesError extends ReturnType<typeof MakesError> {}

const defaultCode = (type: MakesErrorType) => {
  switch (type) {
    case 'bad_request':
      return 400;
    case 'http':
      return 404;
    case 'test':
      return 418;
    case 'unknown':
      return 500;
  }
};
