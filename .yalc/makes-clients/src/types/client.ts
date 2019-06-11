import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { HttpApi } from '.';

export type ClientType = 'api' | 'http' | 'stitch';

export interface ApiClient<API> {
  type: 'api';
  api: API;
}

export type MakesClient<API={}> = ApiClient<API> | HttpClient;

export type ApiClientProvider<API> = (http: HttpApi) => API;

export interface HttpClient {
  type: 'http';
  http: HttpApi;
}

export interface StitchClient {
  type: 'stitch';
  stitch: StitchAppClient;
}

export const MakesClientOptions = (baseUrl?: string, credentials?: { username: string; password: string }) => ({
  baseUrl,
  credentials,
});

export interface MakesClientOptions extends ReturnType<typeof MakesClientOptions> {}
