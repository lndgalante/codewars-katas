/*
  Title:
    Squash the bugs

  Description:
    Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
    Output should be the length of the longest word, as a number.

    There will only be one 'longest' word.

  Kata Link:
    https://www.codewars.com/kata/squash-the-bugs

  Discuss Link:
    https://www.codewars.com/kata/squash-the-bugs/discuss

  Solutions Link:
    https://www.codewars.com/kata/squash-the-bugs/solutions
*/

// Long Solution
/* function findLongest(str) {
  const spl = str.split(' ')
  let longest = 0

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }

  return longest
}
 */
// Short Solution
const findLongest = str => Math.max(...str.split(' ').map(word => word.length))

// Function Export
module.exports = findLongest
