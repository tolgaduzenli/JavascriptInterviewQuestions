// CHALLENGE: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels and replace all Z with A
// ex. 'hello there' => Ifmmp UIfsf

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1); //next character in the alphabet
    }
  });
  return newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
}

console.log(letterChanges("hello therez"));
