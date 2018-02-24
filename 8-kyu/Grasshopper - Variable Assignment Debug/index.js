/*
  Title:
    Grasshopper - Variable Assignment Debug

  Description:
    Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-variable-assignment-debug

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-variable-assignment-debug/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-variable-assignment-debug/solutions
*/

// Long Solution
const a = 'dev'
const b = 'Lab'
const name = `${a}${b}`

// Function Export
module.exports = { a, b, name }
