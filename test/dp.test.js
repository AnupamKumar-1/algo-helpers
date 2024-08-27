// test/dp.test.js
const { 
    fibonacci, 
    longestCommonSubsequence, 
    knapsack01, 
    knapsackFractional, 
    knapsackMultiDimensional,
  } = require('../src/dp/index');
  
  test('fibonacci(5) should return 5', () => {
    expect(fibonacci(5)).toBe(5);
  });
  
  test('longestCommonSubsequence("abcde", "ace") should return 3', () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
  });
  
  // Knapsack 0/1 Test
  test('0/1 Knapsack should return the maximum value achievable with the given capacity', () => {
    const weights = [2, 3, 4, 5];
    const values = [3, 4, 5, 6];
    const capacity = 5;
    const result = knapsack01(weights, values, capacity);
    expect(result).toBe(7); // Best combination: item 1 and item 2 (values: 3 + 4)
  });
  
  // Fractional Knapsack Test
  test('Fractional Knapsack should return the maximum value achievable with the given capacity', () => {
    const weights = [2, 3, 4, 5];
    const values = [3, 4, 5, 6];
    const capacity = 5;
    const result = knapsackFractional(weights, values, capacity);
    expect(result).toBe(7.0); // Best combination: item 1 and part of item 2 (values: 3 + 4)
  });
  
  // Multi-dimensional Knapsack Test
  test('Multi-dimensional Knapsack should return the maximum value achievable with given capacities', () => {
    const weights = [[2, 3], [4, 2], [3, 1]];
    const values = [3, 5, 4];
    const capacities = [5, 5];
    const result = knapsackMultiDimensional(weights, values, capacities);
    expect(result).toBe(7); // Best combination: item 1 and item 2
  });
  
  