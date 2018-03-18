/*
  Title:
    Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

  Description:
    Remove n exclamation marks in the sentence from left to right. n is positive integer.

  Examples:
    remove("Hi!",1) === "Hi"
    remove("Hi!",100) === "Hi"
    remove("Hi!!!",1) === "Hi!!"
    remove("Hi!!!",100) === "Hi"
    remove("!Hi",1) === "Hi"
    remove("!Hi!",1) === "Hi!"
    remove("!Hi!",100) === "Hi"
    remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/solutions
*/

// Long Solution
/*
const remove = (s, n) => {
  let result = s

  for (let i = 0; i < n; i++) {
    result = result.replace('!', '')
  }

  return result
}
*/

// Short Solution
const remove = (s, n) => (n ? remove(s.replace('!', ''), n - 1) : s)

// Function Export
module.exports = remove
