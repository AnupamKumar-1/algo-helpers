export function editDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Edge case: if either string is empty
    if (m === 0) return n; // If str1 is empty, return the length of str2
    if (n === 0) return m; // If str2 is empty, return the length of str1

    // If str1 is shorter than str2, swap them to reduce space usage
    if (m < n) {
        return editDistance(str2, str1); // Ensure str1 is always longer than str2
    }

    const previous = Array(n + 1).fill(0);
    const current = Array(n + 1).fill(0);

    for (let j = 0; j <= n; j++) previous[j] = j;

    for (let i = 1; i <= m; i++) {
        current[0] = i;
        for (let j = 1; j <= n; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            current[j] = Math.min(
                previous[j] + 1,    // Deletion
                current[j - 1] + 1, // Insertion
                previous[j - 1] + cost // Substitution
            );
        }
        [previous, current] = [current, previous]; // Swap references
    }

    return previous[n];
}
