/*
  Title:
    String repeat

  Description:
    Write a function called repeatStr which repeats the given string string exactly n times.

  Examples:
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

  Kata Link:
    https://www.codewars.com/kata/string-repeat

  Discuss Link:
    https://www.codewars.com/kata/string-repeat/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-repeat/solutions
*/

// Long Solution
/*
function repeatStr(n, s) {
  return s.repeat(n)
}
*/

// Short Solution
const repeatStr = (n, s) => s.repeat(n)

// Function Export
module.exports = repeatStr
