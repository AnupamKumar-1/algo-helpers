import { SegmentTree } from '../src/tree/segmentTree';

describe('SegmentTree', () => {
  let st;
  beforeEach(() => {
    st = new SegmentTree([1, 2, 3, 4, 5]);
  });

  test('queryRange should return the correct initial sums', () => {
    expect(st.queryRange(0, 4)).toBe(15);
    expect(st.queryRange(1, 3)).toBe(2 + 3 + 4);
  });

  test('updateRange should add value to all elements in range', () => {
    st.updateRange(1, 3, 5);       // arr becomes [1, 7, 8, 9, 5]
    expect(st.queryRange(0, 4)).toBe(1 + 7 + 8 + 9 + 5);
    expect(st.queryRange(2, 2)).toBe(8);
  });

  test('out-of-bounds queries should return 0', () => {
    expect(st.queryRange(5, 10)).toBe(0);
    expect(st.queryRange(-3, -1)).toBe(0);
  });
});
