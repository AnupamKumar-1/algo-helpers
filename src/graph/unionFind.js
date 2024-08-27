// src/graph/UnionFind.js

export class UnionFind {
    constructor(size) {
      if (size < 0) {
        throw new Error('Size must be a non-negative integer.');
      }
      this.parent = Array.from({ length: size }, (_, i) => i);
      this.rank = Array(size).fill(1);
    }
  
    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]); // Path compression
      }
      return this.parent[x];
    }
  
    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
  
      if (rootX !== rootY) {
        // Union by rank
        if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
      }
    }
  }
  