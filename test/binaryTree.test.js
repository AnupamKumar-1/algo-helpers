import { createBinaryTree } from '../src/binaryTree/createBinaryTree';
import { findHeight } from '../src/binaryTree/findHeight';
import { findDiameter } from '../src/binaryTree/findDiameter';
import { inOrderTraversal } from '../src/binaryTree/inOrderTraversal';
import { preOrderTraversal } from '../src/binaryTree/preOrderTraversal';
import { postOrderTraversal } from '../src/binaryTree/postOrderTraversal';
import { levelOrderTraversal } from '../src/binaryTree/levelOrderTraversal';


// Helper function to create a test tree
const createTestTree = () => {
    const values = [1, 2, 3, 4, 5, 6, 7];
    return createBinaryTree(values);
};

// Test for creating and traversing the binary tree
test('Binary Tree: Create and Traverse', () => {
    const root = createTestTree();

    expect(inOrderTraversal(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
    expect(preOrderTraversal(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    expect(postOrderTraversal(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    expect(levelOrderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

// Test for finding the height of the binary tree
test('Binary Tree: Find Height', () => {
    const root = createTestTree();
    expect(findHeight(root)).toBe(3);

    // Edge case: Empty tree
    expect(findHeight(null)).toBe(0);
});

// Test for finding the diameter of the binary tree
test('Binary Tree: Find Diameter', () => {
    const root = createTestTree();
    expect(findDiameter(root)).toBe(4);

    // Edge case: Empty tree
    expect(findDiameter(null)).toBe(0);
});

