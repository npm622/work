import { ApiClient, ApiClientProvider, MakesClientOptions } from '..';
import BaseClient from './client';

export default class MakesApiClient<API> extends BaseClient implements ApiClient<API> {
  readonly type = 'api';

  constructor(private apiProvider: ApiClientProvider<API>, options: MakesClientOptions) {
    super(options);
  }

  get api(): API {
    return this.apiProvider(this.http);
  }
}
