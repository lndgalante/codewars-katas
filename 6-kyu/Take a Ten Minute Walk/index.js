/*
  Title:
    Take a Ten Minute Walk

  Description:
    You live in the city of Cartesia where all roads are laid out in a perfect grid.
    You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
    The city provides its citizens with a Walk Generating App on their phones --
    everytime you press the button it sends you an array of one-letter strings
    representing directions to walk (eg. ['n', 's', 'w', 'e']).

    You know it takes you one minute to traverse one city block,
    so create a function that will return true if the walk the app gives you
    will take you exactly ten minutes (you don't want to be early or late!) and will, of course,
    return you to your starting point. Return false otherwise.

  Notes:
    You will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
    It will never give you an empty array (that's not a walk, that's standing still!).

  Kata Link:
    https://www.codewars.com/kata/take-a-ten-minute-walk

  Discuss Link:
    https://www.codewars.com/kata/take-a-ten-minute-walk/discuss

  Solutions Link:
    https://www.codewars.com/kata/take-a-ten-minute-walk/solutions
*/

// Long Solution
/*
function isValidWalk(walk) {
  const north = walk.filter(direction => direction === 'n').length
  const south = walk.filter(direction => direction === 's').length
  const west = walk.filter(direction => direction === 'w').length
  const east = walk.filter(direction => direction === 'e').length

  return walk.length === 10 && north === south && west === east
}
*/

// Short Solution
const count = (walk, dir) => walk.filter(direction => direction === dir).length

const isValidWalk = walk =>
  walk.length === 10 &&
  count(walk, 'n') === count(walk, 's') &&
  count(walk, 'w') === count(walk, 'e')

// Function Export
module.exports = isValidWalk
