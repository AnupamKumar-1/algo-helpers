export class SegmentTree {
  constructor(arr = []) {
    this.n = arr.length;
    this.size = 1;
    while (this.size < this.n) this.size <<= 1;
    this.tree = new Array(this.size << 1).fill(0);
    this.lazy = new Array(this.size << 1).fill(0);
    this._build(arr, 1, 0, this.size - 1);
  }

  _build(arr, node, l, r) {
    if (l === r) {
      this.tree[node] = arr[l] ?? 0;
    } else {
      const mid = (l + r) >> 1;
      this._build(arr, node << 1, l, mid);
      this._build(arr, node << 1 | 1, mid + 1, r);
      this.tree[node] = this.tree[node << 1] + this.tree[node << 1 | 1];
    }
  }

  _apply(node, l, r, val) {
    this.tree[node] += (r - l + 1) * val;
    this.lazy[node] += val;
  }

  _push(node, l, r) {
    if (this.lazy[node] !== 0) {
      const mid = (l + r) >> 1;
      this._apply(node << 1, l, mid, this.lazy[node]);
      this._apply(node << 1 | 1, mid + 1, r, this.lazy[node]);
      this.lazy[node] = 0;
    }
  }

  updateRange(ql, qr, val, node = 1, l = 0, r = this.size - 1) {
    if (qr < l || ql > r) return;
    if (ql <= l && r <= qr) {
      this._apply(node, l, r, val);
      return;
    }
    this._push(node, l, r);
    const mid = (l + r) >> 1;
    this.updateRange(ql, qr, val, node << 1, l, mid);
    this.updateRange(ql, qr, val, node << 1 | 1, mid + 1, r);
    this.tree[node] = this.tree[node << 1] + this.tree[node << 1 | 1];
  }

  queryRange(ql, qr, node = 1, l = 0, r = this.size - 1) {
    if (qr < l || ql > r) return 0;
    if (ql <= l && r <= qr) return this.tree[node];
    this._push(node, l, r);
    const mid = (l + r) >> 1;
    return this.queryRange(ql, qr, node << 1, l, mid)
         + this.queryRange(ql, qr, node << 1 | 1, mid + 1, r);
  }
}
