/*
  Title:
    Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

  Description:
    You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return either:
    true if all developers in the list code in the same language; or false otherwise.

  Examples:
    For example, given the following input array:

    const list1 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    ];

    your function should return true.

  Notes:
    The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
    The input array will always be valid and formatted as in the example above.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language/solutions
*/

// Long Solution
/*
const isSameLanguage = list => new Set(list.map(({ language }) => language)).size === 1
*/

// Short Solution
const isSameLanguage = list => list.every(({ language }) => language === list[0].language)

// Function Export
module.exports = isSameLanguage
