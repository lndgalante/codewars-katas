/*
  Title:
    Valid Parentheses

  Description:
    Write a function called that takes a string of parentheses,
    and determines if the order of the parentheses is valid.
    The function should return true if the string is valid, and false if it's invalid.

  Examples:
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

  Kata Link:
    https://www.codewars.com/kata/valid-parentheses

  Discuss Link:
    https://www.codewars.com/kata/valid-parentheses/discuss

  Solutions Link:
    https://www.codewars.com/kata/valid-parentheses/solutions
*/

// Long Solution
function validParentheses(parentheses) {
  let limit = parentheses.length / 2
  for (let i = 0; i <= limit; ++i) {
    parentheses = parentheses.replace('()', '')
  }

  return parentheses === ''
}

// Function Export
module.exports = validParentheses
