export function levelOrderTraversal(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}
