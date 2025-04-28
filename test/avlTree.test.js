
import { AVLTree } from '../src/tree/avlTree';

describe('AVLTree', () => {
  let avl;
  const vals = [10, 20, 30, 40, 50, 25];

  beforeEach(() => {
    avl = new AVLTree();
    vals.forEach(v => avl.insert(v));
  });

  test('inorder traversal yields a sorted array', () => {
    expect(avl.inorder()).toEqual([10, 20, 25, 30, 40, 50]);
  });

  test('tree stays balanced (height ≤ ceil(log₂(n+1)))', () => {
    const h = avl.getHeight(avl.root);
    const maxH = Math.ceil(Math.log2(vals.length + 1));
    expect(h).toBeLessThanOrEqual(maxH);
  });
});
