/*
  Title:
    Don't give me five!

  Description:
    In this kata you get the start number and the end number of a region
    and should return the count of all numbers except numbers with a 5 in it.
    The start and the end number are both inclusive!

    The result may contain fives. ;-)
    The start number will always be smaller than the end number. Both numbers can be also negative!

  Examples:
    1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

  Kata Link:
    https://www.codewars.com/kata/dont-give-me-five

  Discuss Link:
    https://www.codewars.com/kata/dont-give-me-five/discuss

  Solutions Link:
    https://www.codewars.com/kata/dont-give-me-five/solutions
*/

// Long Solution
const dontGiveMeFive = (start, end) =>
  new Array(end - start + 1)
    .fill(start)
    .map((number, i) => (i === 0 ? number : number + i))
    .filter(number => !String(number).includes('5')).length

// Short Solution
/*
const dontGiveMeFive = (start, end) =>
  Array
    .from(Array(end - start + 1), (_, i) => i + start)
    .filter(num => !num.toString().includes('5'))
    .length
*/

// Function Export
module.exports = dontGiveMeFive
