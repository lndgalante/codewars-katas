/*
  Title:
    Counting sheep...

  Description:
    Consider an array of sheep where some sheep may be missing from their place.
    We need a function that counts the number of sheep present in the array (true means present).

  Examples:
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    The correct answer would be 17.

  Notes:
    Don't forget to check for bad values like null / undefined

  Kata Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot

  Discuss Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot/discuss

  Solutions Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot/solutions
*/

// Long Solution
/*
function countSheeps(arrayOfSheep) {
  if (!arrayOfSheep) return 0
  return arrayOfSheep.reduce((a, b) => (b ? ++a : a), 0)
}
*/

// Short Solution
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(Boolean).length

// Function Export
module.exports = countSheeps
