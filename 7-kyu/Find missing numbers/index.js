/*
  Title:
    Find missing numbers

  Description:
    You will get an array of numbers.
    Every preceding number is smaller than the one following it.
    Some numbers will be missing, for instance:
    [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
    Your task is to return an array of those missing numbers:
    [-1,0,2,3,4]

  Kata Link:
    https://www.codewars.com/kata/find-missing-numbers

  Discuss Link:
    https://www.codewars.com/kata/find-missing-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-missing-numbers/solutions
*/

// Longer Solution
/*
const allConsecutives = arr =>
  arr.every((number, index) => (index < arr.length - 1 ? number + 1 === arr[index + 1] : true))

const generateIntermediateNumbers = (min, max) => Array.from({ length: max - min }, (_, index) => min + index + 1)

const findMissingNumbers = arr => {
  if (!arr.length || allConsecutives(arr)) return []

  const missingNumbers = []

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    const nextNumber = arr[i + 1]

    if (number + 1 !== nextNumber) {
      const intermediateNumbers = generateIntermediateNumbers(number, nextNumber)
      missingNumbers.push(...intermediateNumbers)
    }
  }

  return missingNumbers.filter(number => !arr.includes(number))
}
*/

// Long Solution
/*
function findMissingNumbers(arr) {
  const result = []
  const [firstNumber] = arr
  const lastNumber = arr.slice(-1)

  for (let i = firstNumber; i < lastNumber; i++) {
    if (!arr.includes(i)) result.push(i)
  }

  return result
}
*/

// Short Solution
const findMissingNumbers = arr => {
  const minNumber = Math.min(...arr)
  const maxNumber = Math.max(...arr)

  return Array.from({ length: maxNumber - minNumber }, (_, idx) => minNumber + idx).filter(num => !arr.includes(num))
}

// Function Export
module.exports = findMissingNumbers
