/*
  Title:
    Mean vs. Median

  Description:
    Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

    'mean' - in case mean value is larger than median value
    'median' - in case median value is larger than mean value
    'same' - in case both mean and median share the same value

    Reminder: Median
    Array will always be valid (odd-length >= 3)

  Kata Link:
    https://www.codewars.com/kata/mean-vs-median

  Discuss Link:
    https://www.codewars.com/kata/mean-vs-median/discuss

  Solutions Link:
    https://www.codewars.com/kata/mean-vs-median/solutions
*/

// Long Solution
/*
const meanVsMedian = numbers => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const mean = numbers.reduce((total, number) => total + number, 0) / numbers.length
  const median = sortedNumbers[Math.floor(numbers.length / 2)]

  if (mean === median) return 'same'
  if (mean > median) return 'mean'
  if (mean < median) return 'median'
}
*/

// Short Solution
const meanVsMedian = numbers => {
  const mean = numbers.reduce((total, number) => total + number, 0) / numbers.length
  const median = [...numbers].sort((a, b) => a - b)[(numbers.length - 1) / 2]

  if (mean === median) return 'same'
  return mean > median ? 'mean' : 'median'
}

// Function Export
module.exports = meanVsMedian
