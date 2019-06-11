import queryString from 'querystring';
import { HttpApi, HttpMethod, HttpRequestOptions, MakesClientOptions, MakesError, MediaType } from '..';
import { safeJoin } from '../utils';

const hasContentType = (res: Response, type: MediaType) =>
  (res.headers.get('Content-Type') || '').split(';').indexOf(type) >= 0;

const isHttpResponseSuccessful = (res: Response) => res.status >= 200 && res.status < 300;

export default abstract class BaseClient {
  constructor(private options: MakesClientOptions) {}

  get http(): HttpApi {
    return {
      get: <RES>(endpoint: string, options: HttpRequestOptions = {}) =>
        this._fetch<RES>(this._url(endpoint, options.params), this._args('GET', options)),
      post: <RES>(endpoint: string, options: HttpRequestOptions = {}) =>
        this._fetch<RES>(this._url(endpoint, options.params), this._args('POST', options)),
      put: <RES>(endpoint: string, options: HttpRequestOptions = {}) =>
        this._fetch<RES>(this._url(endpoint, options.params), this._args('PUT', options)),
      delete: <RES>(endpoint: string, options: HttpRequestOptions = {}) =>
        this._fetch<RES>(this._url(endpoint, options.params), this._args('DELETE', options)),
    };
  }

  private async _fetch<RES>(url: string, args: RequestInit): Promise<RES> {
    return fetch(url, args).then(res => {
      const successful = isHttpResponseSuccessful(res);

      if (hasContentType(res, 'application/json')) {
        return res.json().then(json => (successful ? Promise.resolve(json) : Promise.reject(json)));
      }

      if (hasContentType(res, 'text/plain')) {
        if (successful) {
          return res.text();
        }
      }

      return successful ? res : Promise.reject(MakesError('http', res.statusText, res.status));
    });
  }

  private _url(endpoint: string, params?: object) {
    const { baseUrl } = this.options;

    const url = baseUrl ? safeJoin('/', baseUrl, endpoint) : endpoint;

    if (params) {
      return `${url}?${queryString.stringify(params)}`;
    }

    return url;
  }

  private _args(method: HttpMethod, { acceptType, body, credentials, contentType, headers = {} }: HttpRequestOptions) {
    if (acceptType) {
      headers['Accept'] = acceptType;
    }
    if (contentType) {
      headers['Content-Type'] = contentType;
    }

    const creds = credentials || this.options.credentials;
    if (creds) {
      headers['Authorization'] = `Basic ${new Buffer(creds.username + ':' + creds.password).toString('base64')}`;
    }

    return { method, body, headers };
  }
}
