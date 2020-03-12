/*
  Title:
    Dan's great power generator

  Description:
    Dan likes to find the nth power of number. But he doesn't like it when the result is odd!
    Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

  Examples:
      Eg. if number = 7, and power = 2, result = 50.

  Kata Link:
    https://www.codewars.com/kata/582c42e0f000e54a7d000086

  Discuss Link:
    https://www.codewars.com/kata/582c42e0f000e54a7d000086/discuss

  Solutions Link:
    https://www.codewars.com/kata/582c42e0f000e54a7d000086/solutions
*/

// Long Solution
const roundToNearestTen = (number) => Math.round(number / 10) * 10;

const danspower = (number, power) => {
  const result = number ** power;
  return result % 2 === 0 ? result : roundToNearestTen(result);
};

// Function Export
module.exports = danspower;
