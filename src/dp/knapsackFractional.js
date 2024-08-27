// src/dp/knapsackFractional.js

export function knapsackFractional(weights, values, capacity) {
    const n = weights.length;
    const items = Array.from({ length: n }, (_, i) => ({
      index: i,
      valuePerWeight: values[i] / weights[i],
      weight: weights[i],
      value: values[i]
    }));
  
    items.sort((a, b) => b.valuePerWeight - a.valuePerWeight);
  
    let totalValue = 0;
    let remainingCapacity = capacity;
  
    for (const item of items) {
      if (remainingCapacity >= item.weight) {
        totalValue += item.value;
        remainingCapacity -= item.weight;
      } else {
        totalValue += item.valuePerWeight * remainingCapacity;
        break;
      }
    }
  
    return totalValue;
  }
  