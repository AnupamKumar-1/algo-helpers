export function knapsackMultiDimensional(weights, values, capacities) {
    const numItems = weights.length;
    const numConstraints = capacities.length;
    
    // Edge case: no items or zero capacities
    if (numItems === 0 || capacities.some(capacity => capacity === 0)) return 0;

    // Initialize DP table
    const dp = Array(numItems + 1).fill(null).map(() => 
        Array.from({ length: capacities[0] + 1 }, () => 
            Array(capacities[1] + 1).fill(0)
        )
    );
  
    // Populate the DP table
    for (let i = 1; i <= numItems; i++) {
        const [w1, w2] = weights[i - 1];
        const value = values[i - 1];
        for (let c1 = 0; c1 <= capacities[0]; c1++) {
            for (let c2 = 0; c2 <= capacities[1]; c2++) {
                if (w1 <= c1 && w2 <= c2) {
                    dp[i][c1][c2] = Math.max(
                        dp[i - 1][c1][c2], 
                        dp[i - 1][c1 - w1][c2 - w2] + value
                    );
                } else {
                    dp[i][c1][c2] = dp[i - 1][c1][c2];
                }
            }
        }
    }
  
    return dp[numItems][capacities[0]][capacities[1]];
}
