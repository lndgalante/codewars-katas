/*
  Title:
    Always perfect

  Description:
    While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square.
    For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.
    So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.
    If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".
    If string contains 4 numbers but not consecutive it returns "not consecutive".

  Kata Link:
    https://www.codewars.com/kata/always-perfect

  Discuss Link:
    https://www.codewars.com/kata/always-perfect/discuss

  Solutions Link:
    https://www.codewars.com/kata/always-perfect/solutions
*/

// Long Solution
/*
const allConsecutives = arr =>
  arr.every((number, index) => (index < arr.length - 1 ? number + 1 === arr[index + 1] : true))

const checkRoot = string => {
  const numbers = string.split(',').map(Number)

  if (numbers.includes(0) || numbers.includes(NaN) || numbers.length > 4) return 'incorrect input'
  if (!allConsecutives(numbers)) return 'not consecutive'

  const totalProductPlusOne = numbers.reduce((total, number) => total * number, 1) + 1
  const squareRoot = Math.sqrt(totalProductPlusOne)

  return Number.isInteger(squareRoot) ? `${totalProductPlusOne}, ${squareRoot}` : 'incorrect input'
}
*/

// Short Solution
const checkRoot = string => {
  const numbers = string.split(',')

  if (numbers.length !== 4 || numbers.some(isNaN)) return 'incorrect input'
  if (numbers.some((number, index) => index > 0 && number - numbers[index - 1] !== 1)) return 'not consecutive'

  const totalProductPlusOne = numbers.reduce((total, number) => total * number, 1) + 1
  const squareRoot = Math.sqrt(totalProductPlusOne)

  return `${totalProductPlusOne}, ${squareRoot}`
}

// Function Export
module.exports = checkRoot
