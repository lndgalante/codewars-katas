/*
  Title:
    Broken sequence

  Description:
  You receive some random elements as a space-delimited string.
  Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

  Return:
    - 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
    - 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
    - n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

  Examples:
    "1 2 3 4"  ==>  return 0, because the sequence is complete

    "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

    "2 1 3 a"  ==>  return 1, because it contains a non numerical character

    "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

    "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

  Kata Link:
    https://www.codewars.com/kata/broken-sequence

  Discuss Link:
    https://www.codewars.com/kata/broken-sequence/discuss

  Solutions Link:
    https://www.codewars.com/kata/broken-sequence/solutions
*/

// Long Solution
const findMissingNumber = sequence => {
  const isEmptySequence = sequence.length === 0
  if (isEmptySequence) return 0

  const sequenceArray = sequence.split(' ')
  const sequenceNumbers = sequenceArray.map(Number)

  const areAllNumbers = sequenceArray.every(element => !isNaN(element))
  if (!areAllNumbers) return 1

  const isFirstOne = sequenceNumbers[0] !== 1
  if (isFirstOne) return 1

  const isSequence = sequenceNumbers
    .sort((current, previous) => current - previous)
    .every((number, index, array) => {
      if (index === array.length - 1) return true
      return number + 1 === array[index + 1]
    })
  if (isSequence) return 0

  const missingNumber = sequenceNumbers.find(
    (number, index, array) => number + 1 !== array[index + 1]
  )

  if (missingNumber) return missingNumber + 1
}

// Function Export
module.exports = findMissingNumber
