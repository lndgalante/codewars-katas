/*
  Title:
    Simple string reversal II

  Description:
    In this Kata, you will be given a string and two indexes.
    Your task is to reverse the portion of that string between those two indices inclusive.

  Examples:
    solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
    solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.

  Notes:
    Input will be lowercase and uppercase letters only.

  Kata Link:
    https://www.codewars.com/kata/simple-string-reversal-ii

  Discuss Link:
    https://www.codewars.com/kata/simple-string-reversal-ii/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-string-reversal-ii/solutions
*/

// Long Solution
const solve = (st, a, b) => {
  const firstPart = st.slice(0, a)
  const secondPart = st.slice(b + 1)
  const reversedString = st
    .slice(a, b + 1)
    .split('')
    .reverse()
    .join('')

  return `${firstPart}${reversedString}${secondPart}`
}

// Function Export
module.exports = solve
