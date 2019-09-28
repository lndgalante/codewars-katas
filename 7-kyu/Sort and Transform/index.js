/*
  Title:
    Sort and Transform

  Description:
    Given an array of numbers, return a string made up of four parts:

      a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),
      b) the same as above, post sorting the array into ascending order,
      c) the same as above, post sorting the array into descending order,
      d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

    The four parts should form a single string, each part separated by a hyphen: '-'

    example format of solution: 'asdf-tyui-ujng-wedg'

  Kata Link:
    https://www.codewars.com/kata/sort-and-transform

  Discuss Link:
    https://www.codewars.com/kata/sort-and-transform/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-and-transform/solutions
*/

// Long Solution
/*
const createWordFromNumbers = numbers => {
  const [firstNumber, secondNumber] = numbers
  const [last, secondLast] = [...numbers].reverse()
  const word = [firstNumber, secondNumber, secondLast, last].map(number => String.fromCharCode(number)).join('')

  return word
}

function sortTransform(numbers) {
  const firstWord = createWordFromNumbers(numbers)
  const secondWord = createWordFromNumbers([...numbers].sort((a, b) => a - b))
  const thirdWord = createWordFromNumbers([...numbers].sort((a, b) => b - a))

  return [firstWord, secondWord, thirdWord, secondWord].join('-')
}
*/

// Short Solution
const createWordFromNumbers = numbers => {
  return [...numbers.slice(0, 2), ...numbers.slice(numbers.length - 2)]
    .map(number => String.fromCharCode(number))
    .join('')
}

function sortTransform(numbers) {
  const firstWord = createWordFromNumbers(numbers)
  const secondWord = createWordFromNumbers([...numbers].sort((a, b) => a - b))
  const thirdWord = createWordFromNumbers([...numbers].sort((a, b) => b - a))

  return [firstWord, secondWord, thirdWord, secondWord].join('-')
}

// Function Export
module.exports = sortTransform
