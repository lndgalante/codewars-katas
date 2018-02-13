/*
  Title:
    Regex count lowercase letters

  Description:
    Your task is simply to count the total number of lowercase letters in a string.

  Examples:
    lowercaseCount("abc"); ==> 3

    lowercaseCount("abcABC123"); ==> 3

    lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ==> 3

    lowercaseCount(""); ==> 0;

    lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ==> 0

    lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ==> 26

  Kata Link:
    https://www.codewars.com/kata/regex-count-lowercase-letters

  Discuss Link:
    https://www.codewars.com/kata/regex-count-lowercase-letters/discuss

  Solutions Link:
    https://www.codewars.com/kata/regex-count-lowercase-letters/solutions
*/

// Long Solution
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length

// Function Export
module.exports = lowercaseCount
