// CHALLENGE: VALIDATE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(123) => 321

function reverseInt(number) {
  const revString = number.toString().split("").reverse().join("");
  return parseInt(revString, 10) * Math.sign(number);
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
