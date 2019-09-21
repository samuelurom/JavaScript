// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// Example: "What if we try a super-long word such as otorhinolaryngology" should return 19.

function findLongestWordLength(str) {
  // First convert the string to array
  let words = str.split(' ');
  // Initialize a variable to store the longest word
  let longestWord = '';
  // loop through the array
  for (let i = 0; i < words.length; i++) {
    // Check if the length of the current iteration is greater than last longest word
    if (words[i].length > longestWord.length) {
      // Set the longest word variable to the current iteration if longer
      longestWord = words[i];
    }
  }
  return longestWord.length;
}