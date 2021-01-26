// CHALLENGE: VALIDATE A PALINDROME STRING
// Return true if palindrome and false if not
// ex. isPalindrome('hello') => false, isPalindrome('racecar') => true,

function isPalindrome(str) {
    if (!str || str.trim() === '') {
        return false;
    }
    return str.split('').reverse().join('') === str;
}

console.log('hello => ', isPalindrome('hello'))
console.log('racecar => ', isPalindrome('racecar'))