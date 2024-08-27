export function postOrderTraversal(root) {
    if (!root) return [];
    const result = [];
    const stack1 = [root];
    const stack2 = [];

    while (stack1.length) {
        const node = stack1.pop();
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    while (stack2.length) {
        result.push(stack2.pop().value);
    }

    return result;
}
