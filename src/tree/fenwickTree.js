export class FenwickTree {
  constructor(n) {
    this.n = n;
    this.bit = new Array(n + 1).fill(0);
  }

  // add `val` at index `i` (0-based)
  update(i, val) {
    for (let idx = i + 1; idx <= this.n; idx += idx & -idx) {
      this.bit[idx] += val;
    }
  }

  // prefix sum [0..i]
  query(i) {
    let s = 0;
    for (let idx = i + 1; idx > 0; idx -= idx & -idx) {
      s += this.bit[idx];
    }
    return s;
  }

  // range sum [l..r]
  rangeQuery(l, r) {
    return this.query(r) - (l > 0 ? this.query(l - 1) : 0);
  }
}
