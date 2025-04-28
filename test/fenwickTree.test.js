import { FenwickTree } from '../src/tree/fenwickTree';

describe('FenwickTree', () => {
  let ft;
  const arr = [1, 2, 3, 4, 5];

  beforeEach(() => {
    ft = new FenwickTree(arr.length);
    arr.forEach((v, i) => ft.update(i, v));
  });

  test('query should return correct prefix sums', () => {
    expect(ft.query(0)).toBe(1);
    expect(ft.query(4)).toBe(15);
  });

  test('rangeQuery should return correct segment sums', () => {
    expect(ft.rangeQuery(1, 3)).toBe(2 + 3 + 4);
    expect(ft.rangeQuery(0, 4)).toBe(15);
  });

  test('updates outside bounds do nothing', () => {
    expect(() => ft.update(10, 5)).not.toThrow();
    expect(ft.query(4)).toBe(15);
  });
});
