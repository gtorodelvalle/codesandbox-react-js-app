import { sum, throws, delay } from '../sum';

beforeEach(() => {
  console.log('TEST!!!');
});

describe('Test group 1', () => {
  test('sum test', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test('Regular expression', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('To be close to', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  test('To contain', () => {
    let arr = ['one', 'two'];
    expect(arr).toContain('two');
  });

  test('Throws', () => {
    expect(throws).toThrow();
    expect(throws).toThrow(Error);
    expect(throws).toThrow(/error/);
  });

  test('Promise', async () => {
    let value = await delay(3000);
    expect(value).toBe(3);
  });

  test('Mocks', done => {
    let myMock = jest.fn(() => {
      expect(jest.isMockFunction(myMock)).toBeTruthy();
      expect(myMock.mock.calls.length).toEqual(1);
      console.log(myMock.mock.results);
      expect(myMock.mock.results[0].value).toBeUndefined();
      done();
    });
    setTimeout(myMock, 3000);
  });
});

afterEach(() => {
  console.log('THE END');
});
