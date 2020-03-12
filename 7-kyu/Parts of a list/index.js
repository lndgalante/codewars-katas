/*
  Title:
    Parts of a list

  Description:
    Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

      * Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
      * Each part will be in a string
      * Elements of a pair must be in the same order as in the original array.

  Examples:
    a = ["az", "toto", "picaro", "zone", "kiwi"] -->
    [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

  Kata Link:
    https://www.codewars.com/kata/parts-of-a-list

  Discuss Link:
    https://www.codewars.com/kata/parts-of-a-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/parts-of-a-list/solutions
*/

// Long Solution
const partlist = array =>
  array.reduce((result, _, index) => {
    if (index === 0) return result
    const subarray = [array.slice(0, index).join(' '), array.slice(index).join(' ')]
    return result.concat([subarray])
  }, [])

// Alternative Solution
/*
const partlist = arr =>
  arr
    .map((_, index) => [
      arr.slice(0, index).join(' '),
      arr.slice(index).join(' '),
    ])
    .slice(1)
*/

// Function Export
module.exports = partlist
