/*
  Title:
    Closure Counter

  Description:
    Closure Counter

    Define the function counter that returns a function that returns an increasing value.
    The first value should be 1.
    You're going to have to use closures.

  Examples:
    const newCounter = counter();
    newCounter() // 1
    newCounter() // 2

  Notes:
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

  Kata Link:
    https://www.codewars.com/kata/60edafd71dad1800563cf933

  Discuss Link:
    https://www.codewars.com/kata/60edafd71dad1800563cf933/discuss

  Solutions Link:
    https://www.codewars.com/kata/60edafd71dad1800563cf933/solutions
*/

// Long Solution
function counter() {
  let value = 0

  return () => ++value
}

// Function Export
module.exports = counter
