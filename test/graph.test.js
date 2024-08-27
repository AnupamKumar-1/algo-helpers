import { dfs, bfs, bellmanFord, topologicalSort, UnionFind, dijkstra, kruskal } from '../src/graph/index';

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

const edges = [
  { start: 'A', end: 'B', weight: 1 },
  { start: 'B', end: 'C', weight: 3 },
  { start: 'A', end: 'C', weight: 4 },
  { start: 'C', end: 'D', weight: 2 },
  { start: 'D', end: 'E', weight: 1 },
  { start: 'E', end: 'C', weight: -6 }
];

const topologicalGraph = {
  5: ['11', '12'],
  11: ['13'],
  12: ['13'],
  13: ['14'],
  14: []
};

const dijkstraEdges = [
  { start: 'A', end: 'B', weight: 1 },
  { start: 'B', end: 'C', weight: 3 },
  { start: 'A', end: 'C', weight: 4 },
  { start: 'C', end: 'D', weight: 2 },
  { start: 'D', end: 'E', weight: 1 }
];

const kruskalEdges = [
  { start: 'A', end: 'B', weight: 1 },
  { start: 'B', end: 'C', weight: 3 },
  { start: 'A', end: 'C', weight: 4 },
  { start: 'C', end: 'D', weight: 2 },
  { start: 'D', end: 'E', weight: 1 }
];

test('DFS should traverse the graph correctly', () => {
  expect(dfs(graph, 'A')).toEqual(['A', 'B', 'D', 'E', 'F', 'C']); // Adjust based on actual DFS order
});

test('BFS should traverse the graph correctly', () => {
  expect(bfs(graph, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']); // Adjust based on actual BFS order
});



test('Dijkstra should return shortest paths from source', () => {
  const result = dijkstra(Object.keys(graph), dijkstraEdges, 'A');
  expect(result).toEqual({
    A: 0,
    B: 1,
    C: 4,
    D: 6,
    E: 7,
    F: Infinity
  });
});

test('Topological Sort should return nodes in correct order', () => {
  const edgesList = Object.entries(topologicalGraph).flatMap(([node, neighbors]) =>
    neighbors.map(neighbor => ({ start: node, end: neighbor }))
  );
  const vertices = Object.keys(topologicalGraph);
  expect(topologicalSort(vertices, edgesList)).toEqual(['5', '11', '12', '13', '14']); // Adjust based on actual sort order
  // Fix Topological Sort algorithm if it is returning incorrect order
});

test('Union-Find should correctly perform union and find operations', () => {
  const uf = new UnionFind(5); // Instantiate UnionFind correctly
  uf.union(0, 1);
  uf.union(1, 2);
  uf.union(3, 4);

  expect(uf.find(0)).toBe(0); // Adjust based on path compression result
  expect(uf.find(1)).toBe(0);
  expect(uf.find(2)).toBe(0);
  expect(uf.find(3)).toBe(3); // 3 and 4 are in the same set
  expect(uf.find(4)).toBe(3);
});

