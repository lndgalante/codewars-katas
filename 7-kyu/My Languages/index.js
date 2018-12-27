/*
  Title:
    My Languages

  Description:
    Given a dictionary/hash/object of languages and your respective test results,
    return the list of languages where your test score is at least 60,
    in descending order of the results.

  Examples:
    {"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
    {"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
    {"C++": 50, "ASM": 10, "Haskell": 20}   --> []

  Notes:
    There will be no duplicate values.

  Kata Link:
    https://www.codewars.com/kata/mylanguages

  Discuss Link:
    https://www.codewars.com/kata/mylanguages/discuss

  Solutions Link:
    https://www.codewars.com/kata/mylanguages/solutions
*/

// Long Solution
const myLanguages = (results, minScore = 60) =>
  Object.entries(results)
    .filter(([, score]) => score >= minScore)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([language]) => language)

// Function Export
module.exports = myLanguages
