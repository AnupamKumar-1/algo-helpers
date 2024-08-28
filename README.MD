# Algo Helpers

algo-helpers is an npm package that provides a collection of commonly used algorithms and data structures for JavaScript. It is designed to be a handy tool for developers, competitive programmers, and students who need quick access to well-optimized implementations of essential algorithms.

## Features

- **Binary Tree Algorithms**: Operations on binary trees, including creation, traversal, and finding properties.
- **Dynamic Programming Helpers**: Solutions for problems like Fibonacci, knapsack, and longest common subsequence.
- **Graph Algorithms**: Functions for traversals, shortest path, and more.
- **Sorting and Searching**: Implementations of common algorithms like binary search, quicksort, and mergesort.

## Installation

```bash
npm install algo-helpers

Usage
You can import functions from the algo-helpers library using ES6 module syntax:

import { binarySearch, quickSort, mergeSort } from 'algo-helpers/sort-search';
import { createBinaryTree, findHeight } from 'algo-helpers/binaryTree';
import { fibonacci, knapsack01 } from 'algo-helpers/dp';
import { dfs, dijkstra } from 'algo-helpers/graph';

Example Code
Binary Search

import { binarySearch } from 'algo-helpers/sort-search';

const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(sortedArray, target);

console.log(index !== -1 ? `Target ${target} found at index ${index}` : `Target ${target} not found`);