import Heap from './heap';

export class MaxHeap extends Heap {
  constructor() {
    super((a, b) => b - a);
  }
}
