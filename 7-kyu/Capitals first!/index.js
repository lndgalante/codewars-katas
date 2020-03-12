/*
  Title:
    Capitals first!

  Description:
    Create a function that takes an input String and returns a String,
    where all the uppercase words of the input String are in front and all the lowercase words at the end.
    The order of the uppercase and lowercase words should be the order in which they occur.
    If a word starts with a number or special character, skip the word and leave it out of the result.
    Input String will not be empty.

  Examples:
    For an input String: "hey You, Sort me Already!"
    the function should return: "You, Sort Already! hey me"

  Kata Link:
    https://www.codewars.com/kata/capitals-first

  Discuss Link:
    https://www.codewars.com/kata/capitals-first/discuss

  Solutions Link:
    https://www.codewars.com/kata/capitals-first/solutions
*/

// Long Solution
/*
const capitalsFirst = str => {
  const words = str.split(' ')
  const upperCaseWords = words.filter(([firstLetter]) => /[A-Z]/.test(firstLetter))
  const lowerCaseWords = words.filter(([firstLetter]) => /[a-z]/.test(firstLetter))

  return [...upperCaseWords, ...lowerCaseWords].join(' ')
}
*/

// Short Solution
const capitalsFirst = string =>
  [
    ...string.split(' ').filter(([firstLetter]) => /[A-Z]/.test(firstLetter)),
    ...string.split(' ').filter(([firstLetter]) => /[a-z]/.test(firstLetter)),
  ].join(' ')

// Function Export
module.exports = capitalsFirst
