/*
  Title:
    Jumping Number (Special Numbers Series #4)

  Description:
    Definition
    Jumping number is the number that All adjacent digits in it differ by 1.

    Task
    Given a number, Find if it is Jumping or not .

  Examples:
    Input >> Output Examples

    1- jumpingNumber(9) ==> return "Jumping!!"

    Explanation:
    It's  single-digit number

    2- jumpingNumber(79) ==> return "Not!!"

    Explanation:
    Adjacent digits don't differ by 1

    3- jumpingNumber(23) ==> return "Jumping!!"

    Explanation:
    Adjacent digits differ by 1

    4- jumpingNumber(556847) ==> return "Not!!"

    Explanation:
    Adjacent digits don't differ by 1

    5- jumpingNumber(4343456) ==> return "Jumping!!"

    Explanation:
    Adjacent digits differ by 1

    6- jumpingNumber(89098) ==> return "Not!!"

    Explanation:
    Adjacent digits don't differ by 1

    7- jumpingNumber(32) ==> return "Jumping!!"

    Explanation:
    Adjacent digits differ by 1


  Notes:
    - Number passed is always  Positive .
    - Return the result as String .
    - The difference between ‘9’ and ‘0’ is not considered as 1 .
    - All single digit numbers are considered as Jumping numbers.

  Kata Link:
    https://www.codewars.com/kata/jumping-number-special-numbers-series-number-4

  Discuss Link:
    https://www.codewars.com/kata/jumping-number-special-numbers-series-number-4/discuss

  Solutions Link:
    https://www.codewars.com/kata/jumping-number-special-numbers-series-number-4/solutions
*/

// Long Solution
/*
const jumpingNumber = n => {
  const numbers = [...String(n)]
  const allAdjacentsDiffersByOne = numbers.every((num, index, array) => {
    if (index === array.length - 1) return true

    const actualNumber = Number(num)
    const nextNumber = Number(array[index + 1])

    return actualNumber === nextNumber + 1 || actualNumber === nextNumber - 1
  })

  return allAdjacentsDiffersByOne ? 'Jumping!!' : 'Not!!'
}
*/

// Short Solution
const jumpingNumber = n =>
  [...String(n)].every((num, index, array) => index === 0 || Math.abs(num - array[index - 1]) === 1)
    ? 'Jumping!!'
    : 'Not!!'

// Function Export
module.exports = jumpingNumber
