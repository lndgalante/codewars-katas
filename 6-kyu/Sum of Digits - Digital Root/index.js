/*
  Title:
    Sum of Digits / Digital Root

  Description:
    In this kata, you must create a digital root function.

    A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

  Kata Link:
    https://www.codewars.com/kata/sum-of-digits-slash-digital-root

  Discuss Link:
    https://www.codewars.com/kata/sum-of-digits-slash-digital-root/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-digits-slash-digital-root/solutions
*/

function digitalRoot(n) {
  if (String(n).length === 1) return n

  const numberDestructured = [...String(n)]
  const total = numberDestructured.reduce(
    (accumulator, current) => accumulator + Number(current),
    0
  )

  return digitalRoot(total)
}

// Function Export
module.exports = digitalRoot
