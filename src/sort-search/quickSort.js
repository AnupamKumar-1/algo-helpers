/**
 * Quick Sort Algorithm
 * @param {number[]} arr - Array of numbers to be sorted
 * @returns {number[]} - Sorted array
 */
export const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
  
    return [...quickSort(left), ...middle, ...quickSort(right)];
  };
  