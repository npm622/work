import { HttpApi } from '../src';
import { prefix, safeJoin } from '../src/utils';
import { TestHarness, TestServer } from './test_utils';

describe('utils', () => {
  const TEST_CASES = ['6', '/', '@', '&'];

  describe('prefix', () => {
    TEST_CASES.forEach(testCase => {
      describe(`${testCase}`, () => {
        it('string without prefix', () => {
          expect(prefix(testCase, `text`)).toBe(`${testCase}text`);
        });

        it('string with prefix', () => {
          expect(prefix(testCase, `${testCase}text`)).toBe(`${testCase}text`);
        });

        it('string with multi prefix', () => {
          expect(prefix(testCase, `${testCase}${testCase}${testCase}text`)).toBe(
            `${testCase}${testCase}${testCase}text`
          );
        });

        it('string with prefix as suffix', () => {
          expect(prefix(testCase, `test${testCase}`)).toBe(`${testCase}test${testCase}`);
        });
      });
    });
  });

  describe('safe join', () => {
    TEST_CASES.forEach(testCase => {
      describe(`${testCase}`, () => {
        it('blank strings and bookends', () => {
          expect(safeJoin(testCase, testCase, 'a', '', '', 'b', '', 'c', '', '', '', testCase)).toBe(
            `${testCase}a${testCase}b${testCase}c${testCase}`
          );
        });

        it('blank strings no bookends', () => {
          expect(safeJoin(testCase, 'a', '', '', 'b', '', 'c', '', '', '')).toBe(`a${testCase}b${testCase}c`);
        });

        it('strings without delimiter', () => {
          expect(safeJoin(testCase, 'a', 'b', 'c')).toBe(`a${testCase}b${testCase}c`);
        });

        it('first string begins with delimiter', () => {
          expect(safeJoin(testCase, `${testCase}a${testCase}`, 'b', 'c')).toBe(`${testCase}a${testCase}b${testCase}c`);
        });

        it('last string begins with delimiter', () => {
          expect(safeJoin(testCase, 'a', 'b', `${testCase}c${testCase}`)).toBe(`a${testCase}b${testCase}c${testCase}`);
        });

        it('strings with delimiter and bookends', () => {
          expect(
            safeJoin(testCase, `${testCase}a${testCase}`, `${testCase}b${testCase}`, `${testCase}c${testCase}`)
          ).toBe(`${testCase}a${testCase}b${testCase}c${testCase}`);
        });

        it('strings with delimiter no bookends', () => {
          expect(safeJoin(testCase, `a${testCase}`, `${testCase}b${testCase}`, `${testCase}c`)).toBe(
            `a${testCase}b${testCase}c`
          );
        });
      });
    });
  });
});

const TestApi = (http: HttpApi) => ({
  list: () => http.get<TestType[]>('', { contentType: 'application/json' }),
  create: () => http.post<TestType>('', { contentType: 'application/json' }),
  update: () => http.put<void>(''),
  delete: () => http.put<void>(''),
});

interface TestApi extends ReturnType<typeof TestApi> {}

const TestType = (eggcorn: string) => ({ eggcorn });

interface TestType extends ReturnType<typeof TestType> {}

describe('test server', () => {
  it('setup properly with default inputs', async () => {
    const server = new TestServer();
    await server.setup();
    expect(server.port).toBe(7000);
    await server.teardown();
  });

  describe('setup properly with custom inputs', () => {
    const TEST_CASES = [
      {
        description: 'credentials provided to factory function',
        port: 8000,
        requestHandler: () =>
          new TestHarness(factory =>
            factory('http://localhost:8000', { username: 'admin', password: 'password' }).http()
          )
            .httpClient()
            .http.get<string>('', {
              acceptType: 'application/json',
              contentType: 'text/plain',
              headers: { 'content-encoding': 'utf-8' },
              params: { foo: 'bar' },
            }),
      },
      {
        description: 'credentials provided to http function',
        port: 8001,
        requestHandler: () =>
          new TestHarness(factory => factory().http()).httpClient().http.get<string>('http://localhost:8001', {
            acceptType: 'application/json',
            contentType: 'text/plain',
            credentials: { username: 'admin', password: 'password' },
            headers: { 'content-encoding': 'utf-8' },
            params: { foo: 'bar' },
          }),
      },
    ] as { description: string; port: number; requestHandler: () => Promise<string> }[];

    TEST_CASES.forEach(testCase => {
      it(testCase.description, async () => {
        let url = undefined as string | undefined;
        let accept = undefined as string | undefined;
        let contentType = undefined as string | undefined;
        let authorization = undefined as string | undefined;
        let contentEncoding = undefined as string | undefined;

        const server = new TestServer(testCase.port, (req, res) => {
          url = req.url;
          accept = req.headers['accept'];
          contentType = req.headers['content-type'];
          authorization = req.headers['authorization'];
          contentEncoding = req.headers['content-encoding'];

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('payload');
        });

        expect(authorization).toBeUndefined();

        await server.setup();
        expect(server.port).toBe(testCase.port);

        const res = await testCase.requestHandler();
        expect(res).toBe('payload');

        expect(url).toBe('/?foo=bar');
        expect(accept).toBe('application/json');
        expect(contentType).toBe('text/plain');
        expect(authorization).toBeDefined();
        expect(contentEncoding).toBe('utf-8')

        await server.teardown();
      });
    });
  });

  describe('test harness', () => {
    let testServer = undefined as TestServer | undefined;

    beforeAll(async () => {
      testServer = new TestServer(7474);
      await testServer.setup();
    });

    afterAll(async () => {
      await testServer!.teardown();
    });

    describe('api client', () => {
      const testHarness = new TestHarness<TestApi>(factory => factory('http://localhost:7474').api(TestApi));

      it('setup properly', () => {
        expect(testHarness.client).toBeDefined();
        expect(testHarness.client.type).toBe('api');
        expect(() => testHarness.httpClient()).toThrow('client is not http-based');
      });

      it('executes GET', async () => {
        testServer!.onRequest({
          status: 200,
          contentType: 'application/json',
          payload: JSON.stringify([TestType('got'), TestType('heem!!!')]),
        });

        const res = await testHarness.apiClient().api.list();
        expect(res.length).toBe(2);
        expect(res[0]).toEqual(TestType('got'));
        expect(res[1]).toEqual(TestType('heem!!!'));
      });

      it('executes POST', async () => {
        testServer!.onRequest({
          status: 202,
          contentType: 'application/json',
          payload: JSON.stringify({ egg: 'corn' }),
        });

        const res = await testHarness.apiClient().api.create();
        expect(res).toEqual({ egg: 'corn' });
      });

      it('executes PUT', () => {
        testServer!.onRequest({ status: 201 });

        expect(async () => await testHarness.apiClient().api.update()).not.toThrow();
      });

      it('executes DELETE', () => {
        testServer!.onRequest({ status: 204 });

        expect(async () => await testHarness.apiClient().api.delete()).not.toThrow();
      });
    });

    describe('http client', () => {
      const testHarness = new TestHarness<TestApi>(factory => factory().http());

      it('setup properly', () => {
        expect(testHarness.client).toBeDefined();
        expect(testHarness.client.type).toBe('http');
        expect(() => testHarness.apiClient()).toThrow('client is not api-based');
      });

      it('should GET a raw response', async () => {
        testServer!.onRequest({
          status: 200,
        });

        const res = await testHarness.httpClient().http.get('http://localhost:7474');
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
      });

      it('should GET a json response', async () => {
        testServer!.onRequest({
          status: 200,
          contentType: 'application/json',
          payload: JSON.stringify([TestType('got'), TestType('heem!!!')]),
        });

        const res = await testHarness.httpClient().http.get<TestType[]>('http://localhost:7474');

        expect(res.length).toBe(2);
        expect(res[0]).toEqual(TestType('got'));
        expect(res[1]).toEqual(TestType('heem!!!'));
      });

      it('should GET a text response', async () => {
        const payload = JSON.stringify([TestType('got'), TestType('heem!!!')]);

        testServer!.onRequest({
          status: 200,
          contentType: 'text/plain',
          payload,
        });

        const res = await testHarness.httpClient().http.get<string>('http://localhost:7474');

        expect(res).toBe(payload);
      });

      it('executes POST', async () => {
        testServer!.onRequest({
          status: 202,
          contentType: 'application/json',
          payload: JSON.stringify(TestType('holidays sauce')),
        });

        const res = await testHarness.httpClient().http.post<TestType>('http://localhost:7474');
        expect(res).toEqual(TestType('holidays sauce'));
      });

      it('executes PUT', async () => {
        testServer!.onRequest({ status: 201 });

        const res = await testHarness.httpClient().http.put('http://localhost:7474');
        expect(res.status).toBe(201);
      });

      it('executes DELETE', async () => {
        testServer!.onRequest({ status: 204 });

        const res = await testHarness.httpClient().http.delete('http://localhost:7474');
        expect(res.status).toBe(204);
      });
    });

    describe('fails properly', () => {
      const testHarness = new TestHarness<TestApi>(factory => factory().http());

      it('should resolve a general error', async () => {
        testServer!.onRequest({
          status: 400,
        });

        expect.assertions(4);
        try {
          await testHarness.httpClient().http.get('http://localhost:7474');
        } catch (err) {
          expect(err.type).toBe('http');
          expect(err.code).toBe(400);
          expect(err.message).toBe('Bad Request');
          expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
        }
      });

      it('should resolve a json error', async () => {
        testServer!.onRequest({
          status: 400,
          contentType: 'application/json',
          payload: JSON.stringify({ type: 'test_error', message: 'oh noz!' }),
        });

        expect.assertions(1);
        try {
          await testHarness.httpClient().http.get('http://localhost:7474');
        } catch (err) {
          expect(err).toEqual({ type: 'test_error', message: 'oh noz!' });
        }
      });

      it('should resolve a text error', async () => {
        testServer!.onRequest({
          status: 400,
          contentType: 'text/plain',
          payload: 'oh noz!',
        });

        expect.assertions(1);
        try {
          await testHarness.httpClient().http.get('http://localhost:7474');
        } catch (err) {
          expect(err).toBe('oh noz!');
        }
      });
    });
  });
});
