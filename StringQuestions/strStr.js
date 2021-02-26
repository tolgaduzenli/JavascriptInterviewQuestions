//https://leetcode.com/problems/implement-strstr/
var strStr = function (haystack, needle) {
  if (!needle || needle === "") return 0;
  let y = 0;
  let i = 0;
  let anyCharMatched = false;
  let firstMatchIndex = 0;
  let indexOfNeedle = -1;
  while (i < haystack.length && y < needle.length) {
    if (haystack[i] === needle[y]) {
      y++;
      i++;
      if (!anyCharMatched) {
        firstMatchIndex = i;
        anyCharMatched = true;
      }
    } else {
      if (anyCharMatched) {
        anyCharMatched = false;
        i = firstMatchIndex;
      } else {
        firstMatchIndex = 0;
        i++;
      }
      y = 0;
    }
    if (y === needle.length) {
      indexOfNeedle = firstMatchIndex - 1;
    }
  }
  return indexOfNeedle;
};
console.log(strStr("missisipi", "isip"));
