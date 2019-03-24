import 'es6-promise';
import 'fetch-everywhere';

import { MakesApiClient, MakesHttpClient } from './clients';
import { ApiClientProvider, MakesClientOptions } from './types';

export * from './types';
export * from './clients';

const MakesClients = (baseUrl?: string, credentials?: { username: string; password: string }) => {
  const options = MakesClientOptions(baseUrl, credentials);
  return {
    api: <API = {}>(apiProvider: ApiClientProvider<API>) => new MakesApiClient<API>(apiProvider, options),
    http: () => new MakesHttpClient(options),
  };
};

export default MakesClients;
