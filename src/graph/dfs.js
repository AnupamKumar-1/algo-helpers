export function dfs(graph, start) {
  // Edge case: if graph is empty or start node is not in the graph
  if (Object.keys(graph).length === 0 || !(start in graph)) {
      return [];
  }

  let visited = new Set();

  function dfsUtil(node) {
      if (!visited.has(node)) {
          visited.add(node);
          // Ensure that neighbors are iterable and in the graph
          (graph[node] || []).forEach(neighbor => dfsUtil(neighbor));
      }
  }

  dfsUtil(start);
  return Array.from(visited);
}
