/*
  Title:
    Sir , showMe yourID

  Description:
    There's a new security company in Paris, and they decided to give their employees an algorithm to make first name recognition faster.
    In the blink of an eye, they can now detect if a string is a first name, no matter if it is a one-word name or an hyphenated name.
    They're given this documentation with the algorithm:

    In France, you'll often find people with hyphenated first names. They're called "prénoms composés".
    There could be two, or even more words linked to form a new name, quite like jQuery function chaining ;).
    They're linked using the - symbol, like Marie-Joelle, Jean-Michel, Jean-Mouloud.
    Thanks to this algorithm, you can now recognize hyphenated names quicker than Flash !
    (yeah, their employees know how to use jQuery. Don't ask me why)

    Your mission if you accept it, recreate the algorithm.
    Using the function showMe, which takes a yourID argument, you will check if the given argument is a name or not, by returning true or false.

  Examples:

  Notes:
    - String will either be a one-word first name, or an hyphenated first name , its words being linked by "-".
    - Words can only start with an uppercase letter, and then lowercase letters (from a to z)

  Kata Link:
    https://www.codewars.com/kata/574c51aa3e4ea6de22001363

  Discuss Link:
    https://www.codewars.com/kata/574c51aa3e4ea6de22001363/discuss

  Solutions Link:
    https://www.codewars.com/kata/574c51aa3e4ea6de22001363/solutions
*/

// Long Solution
/*
const showMe = (yourID) => {
  const startsWithUppercaseLetter = /^[A-Z]/.test(yourID)
  const includesSpaces = /\s/g.test(yourID)
  const hasHyphens = /-/g.test(yourID)

  if (hasHyphens) {
    const allNamesStartsWithUppercaseLetter = yourID.split('-').every((name) => /^[A-Z]/.test(name))
    return allNamesStartsWithUppercaseLetter && !includesSpaces
  }

  return startsWithUppercaseLetter && !includesSpaces
}
*/

// Short Solution - https://regexr.com/579dr
const showMe = (yourID) => /^([a-z]-?)+$/i.test(yourID)

// Function Export
module.exports = showMe
