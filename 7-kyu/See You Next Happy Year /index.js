/*
  Title:
    See You Next Happy Year

  Description:
    Scenario
    You're saying good-bye your best friend , See you next happy year .
    Happy Year is the year with only distinct digits , (e.g) 2018

    Task
    Given a year, Find The next happy year or The closest year You'll see your best friend

  Examples:
    Input >> Output Examples:
    1- nextHappyYear (7712) ==> return (7801)

    Explanation:
    As the Next closest year with only distinct digits is  7801 .

    2- nextHappyYear (8989) ==> return (9012)

    Explanation:
    As the Next closest year with only distinct digits is  9012 .

    3- nextHappyYear (1001) ==> return (1023)

    Explanation:
    As the Next closest year with only distinct digits is  1023 .

  Notes:
    - Year Of Course always Positive .
    - Have no fear , It is guaranteed that the answer exists .
    - It's not necessary that the year passed to the function is Happy one .

  Kata Link:
    https://www.codewars.com/kata/see-you-next-happy-year

  Discuss Link:
    https://www.codewars.com/kata/see-you-next-happy-year/discuss

  Solutions Link:
    https://www.codewars.com/kata/see-you-next-happy-year/solutions
*/

// Long Solution
/*
const areAllEqual = array => array.every((value, index) => !array.slice(index + 1).includes(value))

const nextHappyYear = year => {
  let happyYear = year
  let happyYearNumbers = [...String(happyYear)].map(Number)

  do {
    happyYear++
    happyYearNumbers = [...String(happyYear)].map(Number)
  } while (!areAllEqual(happyYearNumbers))

  return happyYear
}
*/

// Recursive Solution
/*
const nextHappyYear = year => {
  let happyYear = year + 1
  let happyYearNumbers = [...String(happyYear)]

  return happyYearNumbers.join('') === Array.from(new Set(happyYearNumbers)).join('')
    ? happyYear
    : nextHappyYear(happyYear)
}
*/

// Short Solution - https://regexr.com/48gri
const nextHappyYear = year => (/(.).*\1/.test(year + 1) ? nextHappyYear(year + 1) : year + 1)

// Function Export
module.exports = nextHappyYear
