// CHALLENGE: LONGEST WORD
// Return the longest word of a string
// if more than one longest word, put into an array
// ex. longestWord('Hello, my name is Jed') === hello
// ex. longestWord('Hello there, my name is Jed') === ['hello', 'there']

function longestWord(str) {
  //create filtered array
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // if multiple words, put into array
  const longestWordArr = sorted.filter(
    (element) => element.length === sorted[0].length
  );
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  }
  return longestWordArr;
}

console.log(longestWord("Hello, my name is Jed"));
console.log(longestWord("Hello there, my name is Jed"));
