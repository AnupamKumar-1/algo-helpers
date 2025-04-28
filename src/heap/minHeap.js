import Heap from './heap';

export class MinHeap extends Heap {
  constructor() {
    super((a, b) => a - b);
  }
}
