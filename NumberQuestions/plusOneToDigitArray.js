var plusOne = function (digits) {
  let resultArr = [];
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let r = digits[i] + carry;
    if (r >= 10) {
      r -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    resultArr[i + 1] = r;
  }
  if (carry > 0) {
    resultArr[0] = carry;
    return resultArr;
  }
  return resultArr.splice(1);
};

console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9]));
