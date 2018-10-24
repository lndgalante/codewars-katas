/*
  Title:
    Ghostbusters (whitespace removal)

  Description:
    Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

    In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

    So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

  Examples:
    ghostBusters("Sky scra per");

    Should return:

    "Skyscraper"

    If the building contains no ghosts, return the string:

    "You just wanted my autograph didn't you?"

  Kata Link:
    https://www.codewars.com/kata/ghostbusters-whitespace-removal

  Discuss Link:
    https://www.codewars.com/kata/ghostbusters-whitespace-removal/discuss

  Solutions Link:
    https://www.codewars.com/kata/ghostbusters-whitespace-removal/solutions
*/

// Long Solution
/*
const ghostBusters = building => {
  const hasSpaces = /\s/g.test(building)

  return hasSpaces
    ? building.replace(/\s/g, '')
    : "You just wanted my autograph didn't you?"
}
*/

// Short Solution
const ghostBusters = building =>
  /\s/g.test(building)
    ? building.replace(/\s/g, '')
    : "You just wanted my autograph didn't you?"

// Function Export
module.exports = ghostBusters
