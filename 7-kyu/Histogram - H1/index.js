/*
  Title:
    Histogram - H1

  Description:
    A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

    You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

  Examples:
    6|##### 5
    5|
    4|# 1
    3|########## 10
    2|### 3
    1|####### 7

  Notes:
    - There are no trailing spaces on the lines
    - All lines (including the last) end with a newline \n
    - A count is displayed beside each bar except where the count is 0
    - The number of rolls may vary but there are never more than 100

  Kata Link:
    https://www.codewars.com/kata/histogram-h1

  Discuss Link:
    https://www.codewars.com/kata/histogram-h1/discuss

  Solutions Link:
    https://www.codewars.com/kata/histogram-h1/solutions
*/

// Long Solution
/*
const histogram = results =>
  results
    .map((number, index) => {
      const dice = `${index + 1}|${'#'.repeat(number)}`
      const result = number > 0 ? `${dice} ${number}` : dice

      return index === 0 ? `${result}\n` : result
    })
    .reverse()
    .join('\n')
*/

// Short Solution
const histogram = results =>
  results.reduceRight(
    (histogram, repetitions, index) =>
      `${histogram}${index + 1}|${'#'.repeat(repetitions)}${repetitions ? ` ${repetitions}` : ''}\n`,
    ''
  )

// Function Export
module.exports = histogram
