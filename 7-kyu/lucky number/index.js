/*
  Title:
    lucky number

  Description:
    Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
    1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisble by 9, hence number is lucky.
    Function will return true for lucky numbers and false for others.

  Kata Link:
    https://www.codewars.com/kata/lucky-number

  Discuss Link:
    https://www.codewars.com/kata/lucky-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/lucky-number/solutions
*/

// Long Solution
/*
const isLucky = n => [...String(n)].reduce((total, num) => total + Number(num), 0) % 9 === 0
*/

// Short Solution
const isLucky = n => n % 9 === 0

// Function Export
module.exports = isLucky
