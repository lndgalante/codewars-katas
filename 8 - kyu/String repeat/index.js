/* 
  Title:
    String repeat

  Description:
    Write a function called repeatStr which repeats the given string string exactly n times.

  Examples:
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

  Link:
    https://www.codewars.com/kata/string-repeat
*/

// Long Solution
/* 
function repeatStr(n, s) {
  return s.repeat(n)
} 
*/

// Short Solution
const repeatStr = (n, s) => s.repeat(n)

// Exports function
module.exports = repeatStr
