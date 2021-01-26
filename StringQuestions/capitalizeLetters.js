// CHALLENGE: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') => 'I Love Javascript'

function capitalizeLetters(str) {
  let wordArr = str.split(" ");
  wordArr = wordArr.map(
    (element) => element[0].toUpperCase() + element.substring(1)
  );
  return wordArr.join(" ");
}

console.log(capitalizeLetters("i love javascript"));
