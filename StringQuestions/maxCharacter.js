// CHALLENGE: MAX CHARACTER
// Return a character that is most common in a string.
// ex. maxCharacter('javascript') => a

function maxCharacter(str) {
  const charCounts = {};
  str.split("").forEach((element) => {
    if (charCounts[element.toLowerCase()]) {
      charCounts[element]++;
    } else {
      charCounts[element] = 1;
    }
  });
  let maxValue = 0;
  let maxValueLetter = "";
  Object.keys(charCounts).map((key) => {
    if (charCounts[key] > maxValue) {
      maxValueLetter = key;
      maxValue = charCounts[key];
    }
  });
  return maxValueLetter;
}

console.log(maxCharacter("javascript"));
console.log(maxCharacter("Hello Lulu"));
