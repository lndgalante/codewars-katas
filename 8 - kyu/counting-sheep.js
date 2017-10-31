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
  
  Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot
*/

// Long Solution
// function countSheeps(arrayOfSheep) {
//   if (!arrayOfSheep) return 0
//   return arrayOfSheep.reduce((a, b) => (b ? ++a : a), 0)
// }

// Short Solution
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(Boolean).length

// Test to pass
const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
]

console.log(countSheeps(array1))
// => It should return 17
