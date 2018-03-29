/*
  Title:
    Remove First and Last Character Part Two

  Description:
    This is a spin off of my first Kata, you are given a list of characters as a comma separated string.
    Write a function to return a string containing all except the first and last characters, separated by spaces.
    If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.

    Arrays are joined by adding a single space between each consecutive array element.

  Kata Link:
    https://www.codewars.com/kata/remove-first-and-last-character-part-two

  Discuss Link:
    https://www.codewars.com/kata/remove-first-and-last-character-part-two/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-first-and-last-character-part-two/solutions
*/

// Long Solution
/*
const array = word => {
  const characters = word.split(',')
  characters.shift()
  characters.pop()

  return characters.length ? characters.join(' ') : null
}
*/

// Short Solution
const array = arr =>
  arr
    .split(',')
    .slice(1, -1)
    .join(' ') || null

// Function Export
module.exports = array
