export function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    // Edge case: one or both strings are empty
    if (m === 0 || n === 0) return 0;

    // Initialize DP table
    let prev = Array(n + 1).fill(0);
    let curr = Array(n + 1).fill(0);
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        [prev, curr] = [curr, prev]; // Swap references
    }
    
    return prev[n];
}
