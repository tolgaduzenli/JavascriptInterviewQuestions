// CHALLENGE: REVERSE A STRING
// Return a string in reverse order
// ex. reverseString('hello') => 'olleh'

// SOLUTION 1
// transform string into array and use array reverse method
function reverseString(str) {
  if (!str || str.trim() === "") {
    return str;
  }
  return str.split("").reverse().join("");
}

// SOLUTION 2
// start from last char of string
function reverseString_2(str) {
  if (!str || str.trim() === "") {
    return str;
  }
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

// SOLUTION 3
// start from first char of string
function reverseString_3(str) {
  if (!str || str.trim() === "") {
    return str;
  }
  let revString = "";
  str.split("").forEach((char) => {
    revString = char + revString;
  });
  return revString;
}

// SOLUTION 4
// use reduce method of array
function reverseString_4(str) {
  if (!str || str.trim() === "") {
    return str;
  }
  return str.split("").reduce((revString, char) => char + revString);
}

console.log(reverseString("Hello"));
console.log(reverseString_2("Hello"));
console.log(reverseString_3("Hello"));
console.log(reverseString_4("Hello"));
