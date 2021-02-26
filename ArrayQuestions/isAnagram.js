// CHALLENGE: ANAGRAM
// Return true if words are anagram, otherwise false
// ex. isAnagram('elbow', 'below') => true

function formatString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
//without special characters like .,"";'
function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

//with special characters like .,"";'
function isAnagram2(str1, str2) {
  return formatString2(str1) === formatString2(str2);
}

function formatString2(str) {
  return str.toLowerCase().match(/[a-zA-Z0-9]/g).sort().join("");
}

console.log(isAnagram("elbow", "below")); //true
console.log(isAnagram("hello", "helloo")); //false
console.log(isAnagram("dormitory", "dirty room")); //true
console.log(isAnagram2("dormito12ry", "dir1ty roo2m")); //true
console.log(isAnagram2("h, ell!o 123", "he llo 321")); //true
