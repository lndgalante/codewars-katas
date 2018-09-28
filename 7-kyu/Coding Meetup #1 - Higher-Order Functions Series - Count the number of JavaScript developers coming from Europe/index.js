/*
  Title:
    Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

  Description:
    You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

    Your task is to return the number of JavaScript developers coming from Europe.

  Examples:
    For example, given the following list:

    var list1 = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];

    your function should return number 1.

    If, there are no JavaScript developers from Europe then your function should return 0.

  Notes:
    - The format of the strings will always be Europe and JavaScript.
    - All data will always be valid and uniform as in the example above.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe/solutions
*/

// Long Solution
const countDevelopers = list =>
  list.reduce(
    (jsDevelopersFromEurope, { continent, language }) =>
      continent === 'Europe' && language === 'JavaScript'
        ? jsDevelopersFromEurope + 1
        : jsDevelopersFromEurope,
    0
  )

// Alternative Solution
/*
const countDevelopers = list =>
  list.filter(
    ({ continent, language }) =>
      continent === 'Europe' && language === 'JavaScript'
  ).length
*/

// Function Export
module.exports = countDevelopers
