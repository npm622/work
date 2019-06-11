import * as http from 'http';
import MakesClients, { MakesClient, MakesError, MediaType } from '../src';

export class TestHarness<API = {}> {
  private _client: MakesClient<API>;

  constructor(clientProvider: (factory: typeof MakesClients) => MakesClient<API>) {
    this._client = clientProvider(MakesClients);
  }

  get client() {
    return this._client;
  }

  apiClient() {
    if (this.client.type === 'api') {
      return this.client;
    }
    throw MakesError('test', 'client is not api-based');
  }

  httpClient() {
    if (this.client.type === 'http') {
      return this.client;
    }
    throw MakesError('test', 'client is not http-based');
  }
}

export type RequestHandler = (request: http.IncomingMessage, response: http.ServerResponse) => void;

export class TestServer {
  private requestHandler: RequestHandler;
  private server: http.Server;

  constructor(public port: number = 7000, requestHandler = (() => {}) as RequestHandler) {
    this.requestHandler = requestHandler;
    this.server = http.createServer((req, res) => this.requestHandler(req, res));
  }

  async setup() {
    await this.server.listen(this.port);
  }

  async teardown() {
    await this.server.close();
  }

  onRequest({ status, contentType, payload }: { status: number; contentType?: MediaType; payload?: string }) {
    this.requestHandler = (_req, res) => {
      let headers = undefined as { [key: string]: string } | undefined;
      if (contentType) {
        if (!headers) {
          headers = {};
        }
        headers['Content-Type'] = contentType;
      }

      res.writeHead(status, headers);
      res.end(payload);
    };
  }
}
