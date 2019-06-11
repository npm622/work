export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface HttpOptions {
  acceptType: MediaType;
  body: string;
  contentType: MediaType;
  cors: boolean;
  credentials: { username: string; password: string };
  headers: { [key: string]: string };
  params: object;
}

export interface HttpApi {
  get: HttpRequest;
  post: HttpRequest;
  put: HttpRequest;
  delete: HttpRequest;
}

export type HttpRequest = <RES = Response>(endpoint: string, options?: HttpRequestOptions) => Promise<RES>;

export type HttpRequestOptions = Partial<HttpOptions>;

export type MediaType = 'application/json' | 'text/plain' | 'text/html';
