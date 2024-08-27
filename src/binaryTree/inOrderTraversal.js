export function inOrderTraversal(root) {
    if (!root) return [];
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }

    return result;
}
