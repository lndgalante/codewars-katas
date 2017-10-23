/* 
  Title:
    Sum of Digits / Digital Root

  Description:
    In this kata, you must create a digital root function.

    A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

  Link:
    https://www.codewars.com/kata/541c8630095125aba6000c00
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

// Test to pass
console.log(digitalRoot(4))
// => It should return 4
console.log(digitalRoot(16))
// => It should return 7
console.log(digitalRoot(942))
// => It should return 6
console.log(digitalRoot(132189))
// => It should return 6
console.log(digitalRoot(493193))
// => It should return 2
