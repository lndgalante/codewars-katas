/*
  Title:
    Alphabetical Addition

  Description:
    Your task is to add up letters to one letter.
    The function will be given a variable amount of arguments, each one being a letter to add.

  Notes:
    - Letters will always be lowercase.
    - Letters can overflow (see second to last example of the description)
    - If no letters are given, the function should return 'z'

  Examples:
    addLetters('a', 'b', 'c') = 'f'
    addLetters('a', 'b') = 'c'
    addLetters('z') = 'z'
    addLetters('z', 'a') = 'a'
    addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
    addLetters() = 'z'

  Kata Link:
    https://www.codewars.com/kata/alphabetical-addition

  Discuss Link:
    https://www.codewars.com/kata/alphabetical-addition/discuss

  Solutions Link:
    https://www.codewars.com/kata/alphabetical-addition/solutions
*/

// Long Solution
const addLetters = (...letters) => {
  const charCode = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0) % 26 || 26
  return String.fromCharCode(charCode + 96)
}

// Function Export
module.exports = addLetters
