// CHALLENGE: FIZZBUZZ
// Write a program that prins all the numbers from 1 to 100.
// for multiples of 3, print fizz,
// for multiples of 5, print buzz, for multiples of 3 and 5 together, fizzbuzz

function fizzBuzz(str) {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // i % 15
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
