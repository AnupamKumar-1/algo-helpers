class AVLNode {
  constructor(key) {
    this.key = key;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

export class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    return y;
  }

  _insert(node, key) {
    if (!node) return new AVLNode(key);
    if (key < node.key) node.left = this._insert(node.left, key);
    else if (key > node.key) node.right = this._insert(node.right, key);
    else return node; // no duplicates

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    const balance = this.getBalance(node);

    // LL
    if (balance > 1 && key < node.left.key) return this.rightRotate(node);
    // RR
    if (balance < -1 && key > node.right.key) return this.leftRotate(node);
    // LR
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
    // RL
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    return node;
  }

  insert(key) {
    this.root = this._insert(this.root, key);
  }

  // simple inorder traversal
  inorder(node = this.root, res = []) {
    if (!node) return res;
    this.inorder(node.left, res);
    res.push(node.key);
    this.inorder(node.right, res);
    return res;
  }
}
