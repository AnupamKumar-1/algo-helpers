
import { binarySearch, quickSort, mergeSort } from '../src/sort-search/index';

describe('binarySearch', () => {
  test('should find the target in a sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(arr, 5)).toBe(4);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 9)).toBe(8);
  });

  test('should return -1 when the target is not in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(arr, 10)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(binarySearch(arr, 1)).toBe(-1);
  });

  test('should handle an array with one element', () => {
    const arr = [1];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 2)).toBe(-1);
  });

  test('should handle arrays with duplicate elements', () => {
    const arr = [1, 2, 2, 2, 3, 4, 5];
    expect(binarySearch(arr, 2)).toBeGreaterThanOrEqual(1);
    expect(binarySearch(arr, 2)).toBeLessThanOrEqual(3);
  });
});

describe('quickSort', () => {
  test('should sort the array correctly', () => {
    expect(quickSort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
    expect(quickSort([5, 3, 7, 6, 2])).toEqual([2, 3, 5, 6, 7]);
    expect(quickSort([])).toEqual([]);
  });
});

describe('mergeSort', () => {
  test('should sort the array correctly', () => {
    expect(mergeSort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
    expect(mergeSort([5, 3, 7, 6, 2])).toEqual([2, 3, 5, 6, 7]);
    expect(mergeSort([])).toEqual([]);
  });
});


