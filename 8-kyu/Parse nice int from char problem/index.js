/*
  Title:
    Parse nice int from char problem

  Description:
    Ask a small girl - "How old are you?". She always says strange things... Lets help her!

    For correct answer program should return int from 0 to 9.

    Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

  Kata Link:
    https://www.codewars.com/kata/parse-nice-int-from-char-problem

  Discuss Link:
    https://www.codewars.com/kata/parse-nice-int-from-char-problem/discuss

  Solutions Link:
    https://www.codewars.com/kata/parse-nice-int-from-char-problem/solutions
*/

// Long Solution
/*
function getAge(inputString) {
  return parseInt(inputString.match(/\d/).join(''))
}
*/

// Short Solution
const getAge = inputString => Number(inputString.match(/\d/)[0])

// Function Export
module.exports = getAge
