```markdown
# algo-helpers

**algo-helpers** is an npm package that provides a collection of commonly used algorithms and data structures for JavaScript. It is designed to be a handy tool for developers, competitive programmers, and students who need quick access to well-optimized implementations of essential algorithms.

## 🚀 Features

- **Binary Tree Algorithms**: Operations on binary trees, including creation, traversal, and finding properties (height, diameter).
- **Dynamic Programming Helpers**: Solutions for problems like Fibonacci, 0/1 knapsack, fractional knapsack, multi-dimensional knapsack, and longest common subsequence (LCS).
- **Graph Algorithms**: Functions for traversals (DFS, BFS), shortest paths (Dijkstra), topological sort, and union-find.
- **Sorting & Searching**: Implementations of common algorithms such as binary search, quick sort, merge sort.
- **Trees & Heaps**:
  - **Segment Tree** (point/range updates, range queries)
  - **Fenwick Tree** (Binary Indexed Tree for prefix/range sums)
  - **AVL Tree** (self-balancing BST)
  - **Red-Black Tree** (self-balancing BST)
  - **Treap** (randomized BST)
  - **Max-Heap & Min-Heap** wrappers with custom comparators

## 📦 Installation

Install via npm:

```bash
npm install algo-helpers
```

## 📖 Usage

You can import functions from the algo-helpers library using ES6 module syntax:

```javascript
import { binarySearch, quickSort, mergeSort } from 'algo-helpers/sort-search';
import { createBinaryTree, findHeight } from 'algo-helpers/binaryTree';
import { fibonacci, knapsack01 } from 'algo-helpers/dp';
import { dfs, dijkstra } from 'algo-helpers/graph';
import { SegmentTree } from 'algo-helpers/tree/segmentTree';
import { FenwickTree } from 'algo-helpers/tree/fenwickTree';
import { AVLTree } from 'algo-helpers/tree/avlTree';
import { RedBlackTree } from 'algo-helpers/tree/redBlackTree';
import { Treap } from 'algo-helpers/tree/treap';
import { MaxHeap, MinHeap } from 'algo-helpers/heap';
```

## 🔧 Example Code

### Binary Search

```javascript
import { binarySearch } from 'algo-helpers/sort-search';

const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(sortedArray, target);

console.log(
  index !== -1
    ? `Target ${target} found at index ${index}`
    : `Target ${target} not found`
);
```

### Segment Tree

```javascript
import { SegmentTree } from 'algo-helpers/tree/segmentTree';

const arr = [1, 3, 5, 7, 9];
const st = new SegmentTree(arr);
console.log(st.queryRange(1, 3)); // 3 + 5 + 7 = 15
st.updateRange(2, 4, 2);           // add 2 to elements at indices 2..4
console.log(st.queryRange(0, 4)); // updated sum
```

## 🧪 Testing

This package uses Jest for unit testing. Tests live under the `__tests__/` directory.

Run:

```bash
npm test
```

## 📄 License

MIT
```