export function preOrderTraversal(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.value);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}
