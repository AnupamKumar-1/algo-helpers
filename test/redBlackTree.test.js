import { RedBlackTree } from '../src/tree/redBlackTree';

describe('RedBlackTree', () => {
  let rbt;
  const vals = [10, 20, 30, 15, 25];

  beforeEach(() => {
    rbt = new RedBlackTree();
    vals.forEach(v => rbt.insert(v));
  });

  test('inorder traversal yields a sorted array', () => {
    expect(rbt.inorder()).toEqual([10, 15, 20, 25, 30]);
  });

  test('root is always black', () => {
    expect(rbt.root.color).toBe(1); // BLACK === 1
  });
});
