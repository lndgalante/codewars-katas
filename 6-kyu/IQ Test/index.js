/*
  Title:
    IQ Test

  Description:
    Bob is preparing to pass IQ test. The most frequent task in this test is
    to find out which one of the given numbers differs from the others.
    Bob observed that one number usually differs from the others in evenness.
    Help Bob — to check his answers, he needs a program that among
    the given numbers finds one that is different in evenness,
    and return a position of this number.

  Examples:
    iqTest("2 4 7 8 10")
    => 3 // Third number is odd, while the rest of the numbers are even

    iqTest("1 2 1 1")
    => 2 // Second number is even, while the rest of the numbers are odd

  Notes:
    Keep in mind that your task is to help Bob solve a real IQ test,
    which means indexes of the elements start from 1 (not 0)

  Kata Link:
    https://www.codewars.com/kata/iq-test

  Discuss Link:
    https://www.codewars.com/kata/iq-test/discuss

  Solutions Link:
    https://www.codewars.com/kata/iq-test/solutions
*/

// Long Solution
/*
function iqTest(numbers) {
  const numArray = numbers.split(' ').map(num => Number(num))
  const evens = []
  const odds = []

  for (let ind = 0; ind < numArray.length; ind++) {
    const num = numArray[ind]
    num % 2 === 0 ? evens.push({ num, ind }) : odds.push({ num, ind })
  }

  if (evens.length === 1) return evens[0].ind + 1
  if (odds.length === 1) return odds[0].ind + 1
}
*/

// Short Solution
const iqTest = numbers => {
  const numberArray = numbers.split(' ').map(number => Number(number))
  const even = numberArray.filter(number => number % 2 === 0)
  const odd = numberArray.filter(number => number % 2 !== 0)

  return odd.length < even.length
    ? numberArray.indexOf(odd[0]) + 1
    : numberArray.indexOf(even[0]) + 1
}

// Function Export
module.exports = iqTest
