// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the 
// number and for the multiples of five output “Buzz”. For numbers which 
// are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

// Method 1: Simple Iteration

function fizzBuzz(num) {
  // Init an empty output arr
  let output = [];

  // Iterate through the numbers from 1...n
  for (let i = 1; i <= num; i++) {
    // Divisible by 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz');
      continue;
    } else if (i % 3 === 0) { // Divisible by 3, push Fizz to output
      output.push('Fizz');
      continue;
    } else if (i % 5 === 0) { // Divisible by 5, push Buzz to output
      output.push('Buzz');
      continue;
    } else {
      output.push(i.toString()); // Convert others toString, push to output
    }
  }
  return output;
}