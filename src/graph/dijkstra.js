// PriorityQueue implementation using a min-heap
class PriorityQueue {
    constructor() {
        this.heap = [];
        this.indexes = new Map(); // To keep track of the indexes of elements in the heap
    }

    enqueue(value, priority) {
        if (this.indexes.has(value)) {
            // If value already exists, update the priority
            this.updatePriority(value, priority);
            return;
        }
        
        const node = { value, priority };
        this.heap.push(node);
        this.indexes.set(value, this.heap.length - 1);
        this.bubbleUp(this.heap.length - 1);
    }

    updatePriority(value, priority) {
        const index = this.indexes.get(value);
        if (index !== undefined) {
            this.heap[index].priority = priority;
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this.indexes.set(end.value, 0);
            this.bubbleDown(0);
        }
        this.indexes.delete(min.value);
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element.priority >= parent.priority) break;
            this.heap[index] = parent;
            this.indexes.set(parent.value, index);
            index = parentIndex;
        }
        this.heap[index] = element;
        this.indexes.set(element.value, index);
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < this.heap[swap].priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.indexes.set(this.heap[index].value, index);
            index = swap;
        }
        this.heap[index] = element;
        this.indexes.set(element.value, index);
    }
}

// Dijkstra's algorithm using adjacency list and optimized priority queue
export function dijkstra(vertices, edges, source) {
    const dist = {};
    const adjList = {};

    // Initialize distances and adjacency list
    vertices.forEach(vertex => {
        dist[vertex] = Infinity;
        adjList[vertex] = [];
    });

    edges.forEach(({ start, end, weight }) => {
        adjList[start].push({ end, weight });
    });

    dist[source] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
        const { value: vertex } = pq.dequeue();

        adjList[vertex].forEach(({ end, weight }) => {
            const alt = dist[vertex] + weight;
            if (alt < dist[end]) {
                dist[end] = alt;
                pq.enqueue(end, alt);
            }
        });
    }

    return dist;
}
