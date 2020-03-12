/*
  Title:
    Band name generator

  Description:
    My friend wants a new band name for her band. She like bands that use the formula:
    "The" + a noun with the first letter capitalized, for example:

      "dolphin" -> "The Dolphin"

    However, when a noun STARTS and ENDS with the same letter,
    she likes to repeat the noun twice and connect them together with the first and last letter,
    combined into one word (WITHOUT "The" in front), like this:

      "alaska" -> "Alaskalaska"

    Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

  Kata Link:
    https://www.codewars.com/kata/band-name-generator

  Discuss Link:
    https://www.codewars.com/kata/band-name-generator/discuss

  Solutions Link:
    https://www.codewars.com/kata/band-name-generator/solutions
*/

// Long Solution
/* const bandNameGenerator = str => {
  const finishWithFirstChar = str.endsWith(str[0])
  const firstLetterInUpperCase = str[0].toUpperCase()
  const stringWithoutFirstChar = str.slice(1)

  return finishWithFirstChar
    ? `${firstLetterInUpperCase}${stringWithoutFirstChar}${stringWithoutFirstChar}`
    : `The ${firstLetterInUpperCase}${stringWithoutFirstChar}`
}
*/

// Short Solution
const bandNameGenerator = string =>
  string.endsWith(string[0])
    ? `${string[0].toUpperCase()}${string.slice(1)}${string.slice(1)}`
    : `The ${string.slice(0, 1).toUpperCase()}${string.slice(1)}`

// Function Export
module.exports = bandNameGenerator
