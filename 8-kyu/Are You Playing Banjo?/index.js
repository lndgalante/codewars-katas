/*
  Title:
    Are You Playing Banjo?

  Description:
    Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo"
    name + " does not play banjo"
    Names given are always valid strings.

  Kata Link:
    https://www.codewars.com/kata/are-you-playing-banjo

  Discuss Link:
    https://www.codewars.com/kata/are-you-playing-banjo/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-you-playing-banjo/solutions
*/

// Long Solution
/*
function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') return `${name} plays banjo`

  return `${name} does not play banjo`
}
*/

// Short Solution
const areYouPlayingBanjo = name =>
  /^r/i.test(name) ? `${name} plays banjo` : `${name} does not play banjo`

// Function Export
module.exports = areYouPlayingBanjo
