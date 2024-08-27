export function findHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}
