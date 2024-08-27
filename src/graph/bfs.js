export function bfs(graph, start) {
    // Edge case: if graph is empty or start node is not in the graph
    if (Object.keys(graph).length === 0 || !(start in graph)) {
        return [];
    }
    
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        let node = queue.shift();
        graph[node].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }
    
    return Array.from(visited);
}
