import { MaxHeap } from '../src/heap/maxHeap';
import { MinHeap } from '../src/heap/minHeap';

describe('Heap', () => {
  test('MaxHeap should peek and pop the largest element', () => {
    const h = new MaxHeap();
    [3, 1, 4, 2].forEach(v => h.push(v));
    expect(h.size()).toBe(4);
    expect(h.peek()).toBe(4);
    expect(h.pop()).toBe(4);
    expect(h.pop()).toBe(3);
    expect(h.size()).toBe(2);
  });

  test('MinHeap should peek and pop the smallest element', () => {
    const h = new MinHeap();
    [3, 1, 4, 2].forEach(v => h.push(v));
    expect(h.size()).toBe(4);
    expect(h.peek()).toBe(1);
    expect(h.pop()).toBe(1);
    expect(h.pop()).toBe(2);
    expect(h.size()).toBe(2);
  });
});
