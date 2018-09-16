/*
  Title:
    Filter the number

  Description:
    Oh no! The number has been mixed up with the text.
    Your goal is to retreive the number from the text, can you return the number back to it's original state?
    Task
    Your task is to return a number from a string.

    Details
    You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution - https://regexr.com/3vil7
/*
const filterString = value => Number(value.match(/\d/g).join(''))
*/

// Short Solution - https://regexr.com/3vil4
const filterString = value => Number(value.replace(/\D/g, ''))

// Function Export
module.exports = filterString
