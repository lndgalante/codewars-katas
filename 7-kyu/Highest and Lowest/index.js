/*
  Title:
    Highest and Lowest

  Description:
    In this little assignment you are given a string of space separated numbers,
    and have to return the highest and lowest number.

  Examples:
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

  Notes:
    * All numbers are valid Int32, no need to validate them.
    * There will always be at least one number in the input string.
    * Output string must be two numbers separated by a single space, and highest number is first.

  Kata Link:
    https://www.codewars.com/kata/highest-and-lowest

  Discuss Link:
    https://www.codewars.com/kata/highest-and-lowest/discuss

  Solutions Link:
    https://www.codewars.com/kata/highest-and-lowest/solutions
*/

// Long Solution
function highAndLow(numbers) {
  const orderedNumbers = numbers.split(' ').map(string => Number(string))
  return `${Math.max(...orderedNumbers)} ${Math.min(...orderedNumbers)}`
}

// Function Export
module.exports = highAndLow
