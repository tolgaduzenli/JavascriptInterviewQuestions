// CHALLENGE: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1,2,3,4,5,6,7],3) => [[1,2,3],[4,5,6],[7]]
// ex. chunkArray([1,2,3,4,5,6,7],2) => [[1,2],[3,4],[5,6],[7]]

function chunkArray(arr, len) {
  const chunkedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
