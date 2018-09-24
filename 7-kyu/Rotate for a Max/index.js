/*
  Title:
    Rotate for a Max

  Description:
    Take a number: 56789. Rotate left, you get 67895.

    Keep the first digit in place and rotate left the other digits: 68957.

    Keep the first two digits in place and rotate the other ones: 68579.

    Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

    You have the following sequence of numbers:

    56789 -> 67895 -> 68957 -> 68579 -> 68597

    and you must return the greatest: 68957.

    Calling this function max_rot (or maxRot or ... depending on the language)

    max_rot(56789) should return 68957

  Kata Link:
    https://www.codewars.com/kata/rotate-for-a-max

  Discuss Link:
    https://www.codewars.com/kata/rotate-for-a-max/discuss

  Solutions Link:
    https://www.codewars.com/kata/rotate-for-a-max/solutions
*/

// Long Solution
const maxRot = n => {
  let string = String(n)
  const result = [string]

  for (let index = 0; index < string.length; index++) {
    string = `${string.slice(0, index)}${string.slice(index + 1)}${
      string[index]
    }`
    result.push(string)
  }

  return Math.max(...result)
}

// Function Export
module.exports = maxRot
