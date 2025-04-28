class TreapNode {
  constructor(key, priority = Math.random()) {
    this.key = key;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

export class Treap {
  constructor() {
    this.root = null;
  }

  rotateRight(y) {
    const x = y.left;
    y.left = x.right;
    x.right = y;
    return x;
  }

  rotateLeft(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  _insert(node, key) {
    if (!node) return new TreapNode(key);
    if (key < node.key) {
      node.left = this._insert(node.left, key);
      if (node.left.priority > node.priority) {
        node = this.rotateRight(node);
      }
    } else if (key > node.key) {
      node.right = this._insert(node.right, key);
      if (node.right.priority > node.priority) {
        node = this.rotateLeft(node);
      }
    }
    return node;
  }

  insert(key) {
    this.root = this._insert(this.root, key);
  }

  inorder(node = this.root, res = []) {
    if (!node) return res;
    this.inorder(node.left, res);
    res.push(node.key);
    this.inorder(node.right, res);
    return res;
  }
}
