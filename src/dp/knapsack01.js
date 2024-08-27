export function knapsack01(weights, values, capacity) {
    const n = weights.length;

    // Edge case: no items or zero capacity
    if (n === 0 || capacity === 0) return 0;

    // Use only two rows to optimize space
    const dp = Array(2).fill(null).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const current = i % 2;
        const previous = (i - 1) % 2;

        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[current][w] = Math.max(dp[previous][w], dp[previous][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[current][w] = dp[previous][w];
            }
        }
    }

    return dp[n % 2][capacity];
}
