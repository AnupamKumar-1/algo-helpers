// src/graph/topologicalSort.js

class Deque {
    constructor() {
      this.items = [];
    }
  
    pushBack(item) {
      this.items.push(item);
    }
  
    popFront() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    getSize() {
      return this.items.length;
    }
  }
  
  export function topologicalSort(vertices, edges) {
      const adjList = {};
      const inDegree = {};
      const result = [];
      const zeroInDegreeQueue = new Deque();
  
      // Initialize adjacency list and in-degree count
      vertices.forEach(vertex => {
        adjList[vertex] = [];
        inDegree[vertex] = 0;
      });
  
      edges.forEach(({ start, end }) => {
        adjList[start].push(end);
        inDegree[end]++;
      });
  
      // Add vertices with zero in-degree to the queue
      vertices.forEach(vertex => {
        if (inDegree[vertex] === 0) {
          zeroInDegreeQueue.pushBack(vertex);
        }
      });
  
      while (!zeroInDegreeQueue.isEmpty()) {
        const vertex = zeroInDegreeQueue.popFront();
        result.push(vertex);
  
        adjList[vertex].forEach(neighbor => {
          inDegree[neighbor]--;
          if (inDegree[neighbor] === 0) {
            zeroInDegreeQueue.pushBack(neighbor);
          }
        });
      }
  
      // Check if topological sort is possible (i.e., no cycle exists)
      if (result.length !== vertices.length) {
        throw new Error('Graph contains a cycle');
      }
  
      return result;
    }
  