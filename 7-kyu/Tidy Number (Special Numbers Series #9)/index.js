/*
  Title:
    Tidy Number (Special Numbers Series #9)

  Description:
    Definition
    A Tidy number  is a number whose  digits are in non-decreasing order.

    Task
    Given a number, Find if it is Tidy or not .

  Examples:
    1- tidyNumber (12) ==> return (true)

    Explanation:
    The number's digits    { 1 , 2 }  are in non-Decreasing Order (i.e) 1 <= 2 .

    2- tidyNumber (32) ==> return (false)

    Explanation:
    The Number's Digits  { 3, 2}  are not in non-Decreasing Order (i.e) 3 > 2 .

    3- tidyNumber (1024) ==> return (false)

    Explanation:
    The Number's Digits  {1 , 0, 2, 4}  are not in non-Decreasing Order  as  0 <= 1 .

    4- tidyNumber (13579) ==> return (true)

    Explanation:
    The number's digits    {1 , 3, 5, 7, 9}  are in non-Decreasing Order .

    5- tidyNumber (2335) ==> return (true)

    Explanation:
    The number's digits    {2 , 3, 3, 5}  are in non-Decreasing Order , Note   3 <= 3

  Notes:
    Number passed is always  Positive .

    Return the result as a Boolean

  Kata Link:
    https://www.codewars.com/kata/tidy-number-special-numbers-series-number-9

  Discuss Link:
    https://www.codewars.com/kata/tidy-number-special-numbers-series-number-9/discuss

  Solutions Link:
    https://www.codewars.com/kata/tidy-number-special-numbers-series-number-9/solutions
*/

// Long Solution
/*
const tidyNumber = n =>
  [...String(n)].map(Number).every((num, index, array) => (index + 1 < array.length ? num <= array[index + 1] : true))
*/

// Short Solution
const tidyNumber = n =>
  Number(
    [...String(n)]
      .map(Number)
      .sort((a, b) => a - b)
      .join('')
  ) === n

// Function Export
module.exports = tidyNumber
