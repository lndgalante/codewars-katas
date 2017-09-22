/* 
  Description ⚔️
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example:
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
    The returned format must be correct in order to complete this challenge. 
    Don't forget the space after the closing parenthesis! 
*/

function createPhoneNumber(numbers) {
  const firstPart = [...numbers].splice(0, 3).join('')
  const secondPart = [...numbers].splice(3, 3).join('')
  const thirdPart = [...numbers].splice(6, 4).join('')

  return `(${firstPart}) ${secondPart}-${thirdPart}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
