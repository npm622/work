import { MakesError } from '../src';

describe('types', () => {
  describe('makes error', () => {
    const TEST_CASES = [
      {
        description: 'with custom inputs',
        errorProvider: () => MakesError('test', 'custom test error', 999),
        errorAsserts: err => {
          expect(err.type).toBe('test');
          expect(err.code).toBe(999);
          expect(err.message).toBe('custom test error');
          expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
        },
      },
      {
        description: 'with bad request inputs',
        errorProvider: () => MakesError('bad_request', 'default bad request error'),
        errorAsserts: err => {
          expect(err.type).toBe('bad_request');
          expect(err.code).toBe(400);
          expect(err.message).toBe('default bad request error');
          expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
        },
      },
      {
        description: 'with http inputs',
        errorProvider: () => MakesError('http', 'default http error'),
        errorAsserts: err => {
          expect(err.type).toBe('http');
          expect(err.code).toBe(404);
          expect(err.message).toBe('default http error');
          expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
        },
      },
      {
        description: 'with test inputs',
        errorProvider: () => MakesError('test', 'default test error'),
        errorAsserts: err => {
          expect(err.type).toBe('test');
          expect(err.code).toBe(418);
          expect(err.message).toBe('default test error');
          expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
        },
      },
        {
          description: 'with unknown inputs',
          errorProvider: () => MakesError('unknown', 'custom unknown error'),
          errorAsserts: err => {
            expect(err.type).toBe('unknown');
            expect(err.code).toBe(500);
            expect(err.message).toBe('custom unknown error');
            expect(err.timestamp.getTime()).toBeLessThanOrEqual(new Date().getTime());
          },
        },
    ] as { description: string; errorProvider: () => MakesError; errorAsserts: (err: MakesError) => void }[];

    TEST_CASES.forEach(testCase => {
      it(testCase.description, () => {
        const err = testCase.errorProvider();
        testCase.errorAsserts(err);
      });
    });
  });
});
