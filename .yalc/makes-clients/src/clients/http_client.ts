import { HttpClient, MakesClientOptions } from '..';
import BaseClient from './client';

export default class MakesHttpClient extends BaseClient implements HttpClient {
  readonly type = 'http';

  constructor(options: MakesClientOptions) {
    super(options);
  }
}
