// Return the factorial of a provided integer, greater than or equal to zero.
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120; 
//              0! = 1

// Method 1: Recursive function

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  if (num > 0) {
    return num * (factorialize(num - 1));
  }
}

// Method 2: Loop

function factorialize(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}