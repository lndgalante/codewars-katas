/*
  Title:
    Multiply the number

  Description:
    Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.

  Examples:
    multiply(3)==15
    multiply(10)==250
    multiply(200)==25000
    multiply(0)==0
    multiply(-3)==-15

  Kata Link:
    https://www.codewars.com/kata/multiply-the-number

  Discuss Link:
    https://www.codewars.com/kata/multiply-the-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/multiply-the-number/solutions
*/

// Long Solution
const multiply = number => {
  const num = String(Math.abs(number)).length
  return number * 5 ** num
}

// Function Export
module.exports = multiply
