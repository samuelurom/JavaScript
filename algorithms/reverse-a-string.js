// Reverse a string.
// Result must be a string.
// Example: "String" should return "gnirtS".

// Using String and Array Methods

const reverseString = str => {
  let arr = str.split('');
  let revArr = arr.reverse();
  let revStr = revArr.join('');
  return revStr;
};

// Using String and Array Methods: Chaining

const reverseString = str => {
  return str.split('').reverse().join('');
};

// Without string/array emthods: for Loop

const reverseString = str => {
  let reversedStr = "";

  for (let i = str.length-1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

// Without built-in methods: while Loop

const reverseString = str => {

  let strLength = str.length - 1;
  let reversedStr = "";

  while (strLength >= 0) {
    reversedStr += str[strLength];
    strLength--;
  }

  return reversedStr;
};