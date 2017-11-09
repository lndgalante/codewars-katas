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
// function repeatStr(n, s) {
//   return s.repeat(n)
// }

// Short Solution
const repeatStr = (n, s) => s.repeat(n)

// Test to pass
console.log(repeatStr(6, 'I'))
// => It should return "IIIIII"
console.log(repeatStr(5, 'Hello'))
// => It should return "HelloHelloHelloHelloHello"
console.log(repeatStr(3, '*'))
// => It should return "***"
console.log(repeatStr(5, '#'))
// => It should return "#####"
console.log(repeatStr(2, 'ha '))
// => It should return "ha ha "
