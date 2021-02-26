// CHALLENGE: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - no arrays
// ex. addAll(2,3,4,5) = 14

function addAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => a + b);
}

function addAll_2(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

function addAll_3() {
  return Object.values(arguments).reduce((a, b) => a + b);
}
console.log(addAll(2, 3, 4, 5));
console.log(addAll_2(2, 3, 4, 5));
console.log(addAll_2(2, 3, 4, 5));
