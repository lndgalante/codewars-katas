/*
  Title:
    How many arguments

  Description:
    Create a function called args_count that returns the number of arguments provided

  Examples:
    argsCount(1, 2, 3) -> 3
    argsCount(1, 2, 3, 10) -> 4

  Kata Link:
    https://www.codewars.com/kata/how-many-arguments

  Discuss Link:
    https://www.codewars.com/kata/how-many-arguments/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-arguments/solutions
*/

// Long Solution
/*
function argsCount() {
  return arguments.length
}
*/

// Short Solution
const argsCount = (...args) => args.length

// Function Export
module.exports = argsCount
