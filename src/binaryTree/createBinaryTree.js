export function createBinaryTree(values) {
    if (!values || values.length === 0) return null;

    const root = { value: values[0], left: null, right: null };
    const queue = [root];

    for (let i = 1; i < values.length; i++) {
        const currentNode = queue[0];
        if (!currentNode.left) {
            currentNode.left = { value: values[i], left: null, right: null };
            queue.push(currentNode.left);
        } else if (!currentNode.right) {
            currentNode.right = { value: values[i], left: null, right: null };
            queue.push(currentNode.right);
            queue.shift();
        }
    }

    return root;
}
