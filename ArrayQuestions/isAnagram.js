// CHALLENGE: ANAGRAM
// Return true if words are anagram, otherwise false
// ex. isAnagram('elbow', 'below') => true

function formatString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

console.log(isAnagram("elbow", "below")); //true
console.log(isAnagram("hello", "helloo")); //false
console.log(isAnagram("dormitory", "dirty room")); //true
