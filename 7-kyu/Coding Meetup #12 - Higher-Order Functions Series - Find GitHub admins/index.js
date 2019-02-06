/*
  Title:
    Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

  Description:
    You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
    Given the following input array:
    var list1 = [
      { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
      { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
      { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
    ];

    write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
    [
      { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
      { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
    ]

  Notes:
    - The original order should be preserved.
    - If there are no GitHub admin developers in a given language then return an empty array [].
    - The input array will always be valid and formatted as in the example above.
    - The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
    - The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins/solutions
*/

// Long Solution
const findAdmin = (list, lang) => list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes')

// Function Export
module.exports = findAdmin
