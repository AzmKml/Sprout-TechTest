//(1) Name Validator (Logic Test)
function validName(name) {
  return /((^[A-Z]\.|^[A-Z][a-z]+)\s(([A-Z]\.\s[A-Z][a-z]+$)|[A-Z][a-z]+$))|(^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)?$)/g.test(
    name
  );
}
let a = validName("A. Kesya"); //➞ true
let b = validName("A. K. Putri"); //➞ true
let c = validName("Angelina K. Putri"); //➞ true
let d = validName("Angelina"); //➞ false
// Must be 2 or 3 words
let e = validName("a. Kesya"); //➞ false
// Incorrect capitalization
let f = validName("A Kesya"); //➞ false
// Missing dot after initial
let g = validName("A. Kesya Putri"); //➞ false
// Cannot have: initial first name + word middle name
let h = validName("A. Kesya P."); //➞ false
// Last name cannot be initial
let i = validName("Angelina. Kesya Putri"); //➞ false
// Words cannot end with a dot (only initials can)
let j = validName("Angelina Kesya Putri"); //➞ true

//(2) Find All Numbers Disappeared in an Array (Logic Test)
function findDisappeared(nums) {
  let result = [];

  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] > 1) {
    for (let i = 1; i < nums[0]; i++) {
      result.push(i);
    }
  }

  let lastNum = nums[0];
  nums.forEach((el) => {
    if (el > lastNum + 1) {
      for (let i = lastNum + 1; i < el; i++) {
        result.push(i);
      }
    }
    lastNum = el;
  });
  if (lastNum < nums.length) {
    for (let i = lastNum + 1; i <= nums.length; i++) {
      result.push(i);
    }
  }
  return result;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
let res = findDisappeared(nums); //➞ [5,6]

const nums1 = [1, 1];
let res1 = findDisappeared(nums1); //➞ [2]
console.log(res, res1);
