// CHALLENGE: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// ex. sumAllPrimes(10) = 17

function isNumberPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumAllPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if (isNumberPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10));
