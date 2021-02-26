// CHALLENGE: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. chunkArray([[1,2,3],[4,5,6],[7]]) => [1,2,3,4,5,6,7]

function flattenArray(arrays) {
  return arrays.reduce((a, b) => [...a, ...b]);
}

//do not know depth of array
function flattenArray_2(arrays) {
  return arrays.flat(Infinity);
}

function oldSchoolFlatten(input) {
  let result = [];
  function extractArrayElements(input) {
    for (let i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        extractArrayElements(input[i]);
      } else {
        result.push(input[i]);
      }
    }
  }
  extractArrayElements(input);
  return result;
}

console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7]]));
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [[7]]])); //fail
console.log(flattenArray_2([[1, 2], [[3, 4]], [5, 6], [[7]]]));
console.log(oldSchoolFlatten([[1, 2], [[3, 4]], [5, 6], [[7]]]));
