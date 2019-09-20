// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
// return the length of last word in the string.
// If the last word does not exist, return 0.

// Example:

// Input: "Hello World"; " Hello    World        ";
// Output: 5

function lengthOfLastWord(s) {

  // Trim off extra spaces at the beginning and ending then convert to array
  const strToArray = s.trim().split(' ');
  // Get the last word
  const lastWord = strToArray[strToArray.length - 1];

  return lastWord !== false ? lastWord.length : 0;
}