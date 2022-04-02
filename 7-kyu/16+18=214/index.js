/*
  Title:
    16+18=214

  Description:
    For this kata you will have to forget how to add two numbers.
    It can be best explained using the following meme: https://i.ibb.co/Y01rMJR/caf.png

    In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
    You may assume both integers are positive integers.

  Kata Link:
    https://www.codewars.com/kata/5effa412233ac3002a9e471d

  Discuss Link:
    https://www.codewars.com/kata/5effa412233ac3002a9e471d/discuss

  Solutions Link:
    https://www.codewars.com/kata/5effa412233ac3002a9e471d/solutions
*/

// Long Solution
/*
function add(num1, num2) {
  const [array1, array2] = [String(num1).split('').map(Number), String(num2).split('').map(Number)]

  if (array1.length === array2.length) {
    const result = array1.reduce((accumulator, number, index) => `${accumulator}${number + array2[index]}`, '')
    return Number(result)
  }

  if (array1.length < array2.length) {
    const array1Filled = [...Array.from({ length: array2.length - array1.length }, () => 0), ...array1]
    const result = array1Filled.reduce((accumulator, number, index) => `${accumulator}${number + array2[index]}`, '')
    return Number(result)
  }

  if (array2.length < array1.length) {
    const array2Filled = [...Array.from({ length: array1.length - array2.length }, () => 0), ...array2]
    const result = array2Filled.reduce((accumulator, number, index) => `${accumulator}${number + array1[index]}`, '')
    return Number(result)
  }
}
*/

// Short Solution - Solution by jistjoalal
function add(a, b) {
  return a * b ? Number(`${add((a / 10) | 0, (b / 10) | 0)}${(a % 10) + (b % 10)}`) : a + b
}

// Function Export
module.exports = add
