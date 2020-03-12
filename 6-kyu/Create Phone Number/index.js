/*
  Title:
    Create Phone Number

  Description:
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example:
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
    The returned format must be correct in order to complete this challenge.
    Don't forget the space after the closing parenthesis!

  Kata Link:
    https://www.codewars.com/kata/create-phone-number

  Discuss Link:
    https://www.codewars.com/kata/create-phone-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/create-phone-number/solutions
*/

function createPhoneNumber(numbers) {
  const numbersString = numbers.join('')
  const firstPart = numbersString.slice(0, 3)
  const secondPart = numbersString.slice(3, 6)
  const thirdPart = numbersString.slice(6, 10)

  return `(${firstPart}) ${secondPart}-${thirdPart}`
}

// Function Export
module.exports = createPhoneNumber
