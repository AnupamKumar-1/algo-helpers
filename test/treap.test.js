import { Treap } from '../src/tree/treap';

describe('Treap', () => {
  let treap;
  const vals = [5, 3, 7, 2, 4, 6, 8];

  beforeEach(() => {
    treap = new Treap();
    vals.forEach(v => treap.insert(v));
  });

  test('inorder traversal yields a sorted array', () => {
    expect(treap.inorder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });
});
