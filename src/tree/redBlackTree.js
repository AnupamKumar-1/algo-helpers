const RED = 0, BLACK = 1;

class RBNode {
  constructor(key) {
    this.key = key;
    this.color = RED;
    this.left = this.right = this.parent = null;
  }
}

export class RedBlackTree {
  constructor() {
    this.nil = new RBNode(null);
    this.nil.color = BLACK;
    this.root = this.nil;
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== this.nil) y.left.parent = x;
    y.parent = x.parent;
    if (x.parent === null) this.root = y;
    else if (x === x.parent.left) x.parent.left = y;
    else x.parent.right = y;
    y.left = x;
    x.parent = y;
  }

  rightRotate(x) {
    const y = x.left;
    x.left = y.right;
    if (y.right !== this.nil) y.right.parent = x;
    y.parent = x.parent;
    if (x.parent === null) this.root = y;
    else if (x === x.parent.right) x.parent.right = y;
    else x.parent.left = y;
    y.right = x;
    x.parent = y;
  }

  insert(key) {
    let node = new RBNode(key);
    node.left = node.right = this.nil;
    let y = null;
    let x = this.root;
    while (x !== this.nil) {
      y = x;
      x = (node.key < x.key) ? x.left : x.right;
    }
    node.parent = y;
    if (y === null) this.root = node;
    else if (node.key < y.key) y.left = node;
    else y.right = node;

    if (node.parent === null) {
      node.color = BLACK;
      return;
    }
    if (node.parent.parent === null) return;
    this._fixInsert(node);
  }

  _fixInsert(k) {
    while (k.parent.color === RED) {
      if (k.parent === k.parent.parent.left) {
        let u = k.parent.parent.right;
        if (u.color === RED) {
          k.parent.color = BLACK;
          u.color = BLACK;
          k.parent.parent.color = RED;
          k = k.parent.parent;
        } else {
          if (k === k.parent.right) {
            k = k.parent;
            this.leftRotate(k);
          }
          k.parent.color = BLACK;
          k.parent.parent.color = RED;
          this.rightRotate(k.parent.parent);
        }
      } else {
        let u = k.parent.parent.left;
        if (u.color === RED) {
          k.parent.color = BLACK;
          u.color = BLACK;
          k.parent.parent.color = RED;
          k = k.parent.parent;
        } else {
          if (k === k.parent.left) {
            k = k.parent;
            this.rightRotate(k);
          }
          k.parent.color = BLACK;
          k.parent.parent.color = RED;
          this.leftRotate(k.parent.parent);
        }
      }
      if (k === this.root) break;
    }
    this.root.color = BLACK;
  }

  // in-order traversal keys
  inorder(node = this.root, res = []) {
    if (node !== this.nil) {
      this.inorder(node.left, res);
      res.push(node.key);
      this.inorder(node.right, res);
    }
    return res;
  }
}
