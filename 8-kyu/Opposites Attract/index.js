/*
  Title:
    Opposites Attract

  Description:
    Timmy & Sarah think they are in love, but around where they live,
    they will only know once they pick a flower each.
    If one of the flowers has an even number of petals
    and the other has an odd number of petals it means they are in love.

    Write a function that will take the number of petals of each flower
    and return true if they are in love and false if they aren't.

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/opposites-attract

  Discuss Link:
    https://www.codewars.com/kata/opposites-attract/discuss

  Solutions Link:
    https://www.codewars.com/kata/opposites-attract/solutions
*/

// Long Solution
/*
const isEven = num => num % 2 === 0

const lovefunc = (flower1, flower2) =>
  (isEven(flower1) && !isEven(flower2)) || (!isEven(flower1) && isEven(flower2))

*/

// Short Solution
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

// Function Export
module.exports = lovefunc
