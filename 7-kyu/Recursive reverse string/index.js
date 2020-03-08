/*
  Title:
    Recursive reverse string

  Description:
    Definition:
      Recursive function is a function that calls itself during its execution

    Classic factorial counting on JavaScript
      function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n-1)
      }
    Your objective is to complete a recursive function reverse() that receives str as String and returns the same string in reverse order

    Rules:
      *  reverse function should be executed only N times. N = length of the input string
      *  helper functions are not allowed
      *  changing the signature of the function is not allowed

  Examples:
    reverse("hello world") = "dlrow olleh" (N = 11)
    reverse("abcd") = "dcba" (N = 4)
    reverse("12345") = "54321" (N = 5)

  Notes:
    All tests for this Kata are randomly generated,
    besides checking the reverse logic they will count
    how many times the reverse() function has been executed.

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
function reverse(str) {
  return str.length === 1 ? str : reverse(str.slice(1)) + str[0]
}

// Alternative Solution
/*
function reverse(str) {
  return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}
*/

// Function Export
module.exports = reverse
