/*
  Title:
    Balanced Number (Special Numbers Series #1 )

  Description:
    Definition
    Balanced number is the number that The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal.

    Task
    Given a number, Find if it is Balanced or not .

  Examples:
    Input >> Output Examples
    1- balancedNum (7) ==> return "Balanced"   .

    Explanation:
    Since , The sum of all digits to the left of the middle digit (0)
    and the sum of all digits to the right of the middle digit (0) are equal  , then It's Balanced

    2- balancedNum (295591) ==> return "Not Balanced" .

    Explanation:
    Since , The sum of all digits to the left of the middle digits (11)
    and the sum of all digits to the right of the middle digits (10) are equal  , then It's Not Balanced

    Note : The middle digit(s)  are 55 .

    3- balancedNum (959) ==> return "Balanced"  .

    Explanation:

    Since , The sum of all digits to the left of the middle digits (9)
    and the sum of all digits to the right of the middle digits (9) are equal  , then It's Balanced

    Note : The middle digit  is 5 .

    4- balancedNum (27102983) ==> return "Not Balanced"  .

    Explanation:
    Since , The sum of all digits to the left of the middle digits (10)
    and the sum of all digits to the right of the middle digits (20) are equal  , then It's Not Balanced

    Note : The middle digit(s)  are 02 .

  Notes:
    If the number has an odd number of digits  then there is only one middle digit,  e.g.  92645  has middle digit 6;  otherwise, there are two middle digits , e.g.  1301  has middle digits  3  and  0

    The middle digit(s)  should  not be considered when determining whether a number is balanced or not, e.g  413023  is a balanced number because the left sum and right sum are both   5.

    Number passed is always  Positive .

    Return the result as String

  Kata Link:
    https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1

  Discuss Link:
    https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/solutions
*/

// Long Solution
/*
const sumSide = numbers => numbers.reduce((total, number) => total + Number(number), 0)

const isEven = number => number % 2 === 0

const balancedNum = number => {
  const numbers = [...String(number)]
  if (numbers.length <= 2) return 'Balanced'

  const middle = Math.floor(numbers.length / 2)
  const parsedMiddle = isEven(numbers.length) ? middle - 1 : middle
  const [leftSide, rightSide] = [numbers.slice(0, parsedMiddle), numbers.slice(-parsedMiddle)]

  return sumSide(leftSide) === sumSide(rightSide) ? 'Balanced' : 'Not Balanced'
}
*/

// Short Solution
const balancedNumber = number => {
  const stringNumber = String(number)
  const numbers = Array.from(
    { length: (stringNumber.length - 1) / 2 },
    (_, index) => stringNumber[index] - stringNumber[stringNumber.length - 1 - index]
  )

  return numbers.reduce((total, number) => total + number, 0) === 0 ? 'Balanced' : 'Not Balanced'
}

// Function Export
module.exports = balancedNumber
