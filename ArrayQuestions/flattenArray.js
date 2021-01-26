// CHALLENGE: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. chunkArray([[1,2,3],[4,5,6],[7]]) => [1,2,3,4,5,6,7]

function flattenArray(arrays) {
  return arrays.reduce((a, b) => [...a, ...b]);
}

console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7]]));
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
