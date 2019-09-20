// Reverse a string.
// Result must be a string.
// Example: "String" should return "gnirtS".

// Using String and Array Methods

// const reverseString = str => {
//   let arr = str.split('');
//   let revArr = arr.reverse();
//   let revStr = revArr.join('');
//   return revStr;
// };

// Using String and Array Methods: Chaining

const reverseString = str => {
  return str.split('').reverse().join('');
}
