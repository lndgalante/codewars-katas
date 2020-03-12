/*
  Title:
    Sum The Strings: ARRAY EDITION

  Description:
    Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well.

    If any input is an empty string, it should return the number that isn't just an empty string.
    If both corresponding elements are empty, output "0".

  Examples:
    sumArr(['4','5','6','7','8'],['1','2','3','4','5']) // => ['5','7','9','11','13']
    sumArr(['34','5','200','17','6'],['27','24','14','90','16']) // => ['61','29','214','107','22']

  Notes:
    Remember Number()/parseInt() from https://www.codewars.com/kata/5966e33c4e686b508700002d

  Kata Link:
    https://www.codewars.com/kata/sum-the-strings-array-edition

  Discuss Link:
    https://www.codewars.com/kata/sum-the-strings-array-edition/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-the-strings-array-edition/solutions
*/

// Long Solution
/*
const sumArr = (a, b) => a.reduce((acc, num, index) => [...acc, String(Number(num) + Number(b[index]))], [])
*/

// Short Solution
const sumArray = (a, b) => a.map((number, index) => String(Number(number) + Number(b[index])))

// Function Export
module.exports = sumArray
