export default class Heap {
  constructor(compareFn) {
    this.compare = compareFn;
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0] ?? null;
  }

  push(val) {
    this.data.push(val);
    this._siftUp(this.size() - 1);
  }

  pop() {
    const top = this.peek();
    if (this.size() > 1) {
      this.data[0] = this.data.pop();
      this._siftDown(0);
    } else {
      this.data.pop();
    }
    return top;
  }

  _parent(i) { return (i - 1) >> 1; }
  _left(i)   { return (i << 1) + 1; }
  _right(i)  { return (i << 1) + 2; }

  _siftUp(i) {
    let p = this._parent(i);
    while (i > 0 && this.compare(this.data[i], this.data[p]) < 0) {
      [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
      i = p;
      p = this._parent(i);
    }
  }

  _siftDown(i) {
    const n = this.size();
    while (true) {
      let l = this._left(i), r = this._right(i), smallest = i;
      if (l < n && this.compare(this.data[l], this.data[smallest]) < 0) smallest = l;
      if (r < n && this.compare(this.data[r], this.data[smallest]) < 0) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}
