/* 
  Title:
    Zero fill... for the Queen!

  Description:
    Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.

    For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to achieve this. Additionally, if the size passed is less than the length of number, just return the number as a string. Let's have one that would be both useful and good performance-wise.

  Notes:
    1. Numbers passed only - no strings, objects, functions, etc.
    2. Whole positives only - negatives converted, decimals dropped (provided in solution setup)

  Link:
    https://www.codewars.com/kata/5302f383be2a91e4d70002c6
*/

function zeroFill(number, size) {
  const numberPositive = Math.abs(number).toString()
  const difference = size - numberPositive.length

  return [...Array(difference).fill(0), numberPositive].join('')
}

console.log(zeroFill(11, 5))
// => It should return "00011"
console.log(zeroFill(11, 11))
// => It should return "00000000011"
console.log(zeroFill(-32, 5))
// => It should return "00032"
console.log(zeroFill(0, 3))
// => It should return "000"
