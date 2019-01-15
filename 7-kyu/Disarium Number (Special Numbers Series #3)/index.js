/*
  Title:
    Disarium Number (Special Numbers Series #3)

  Description:
    Definition
    Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

    Task
    Given a number, Find if it is Disarium or not .

  Examples:
    Input >> Output Examples

    1- disariumNumber(89) ==> return "Disarium !!"

    Explanation:
    Since , 81 + 92 = 89 , thus output is "Disarium !!"

    2- disariumNumber(564) ==> return "Not !!"

    Explanation:
    Since , 51 + 62 + 43 = 105 != 546 ,  thus output is "Not !!"

  Notes:
    - Number passed is always  Positive .
    - Return the result as String

  Kata Link:
    https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3

  Discuss Link:
    https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3/solutions
*/

// Long Solution
/*
const disariumNumber = n => {
  const numbers = [...String(n)].map(Number)
  const total = numbers.reduce((total, num, index) => total + num ** (index + 1), 0)

  return total === n ? 'Disarium !!' : 'Not !!'
}
*/

// Short Solution
const disariumNumber = n =>
  [...String(n)].reduce((total, num, index) => total + Number(num) ** (index + 1), 0) === n ? 'Disarium !!' : 'Not !!'

// Function Export
module.exports = disariumNumber
