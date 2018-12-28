/* eslint no-return-assign: 0 */
/* eslint no-sequences: 0 */

/*
  Title:
    Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

  Description:
    You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

  Examples:
    For example, given the following input array:

    var list1 = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
      { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
    ];

    your function should return the following object (associative array in PHP):

    { C: 2, JavaScript: 1, Ruby: 1 }

  Notes:
    - The order of the languages in the object does not matter.
    - The count value should be a valid number.
    - The input array will always be valid and formatted as in the example above.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages/solutions
*/

// Long Solution
/*
const countLanguages = list =>
  list.reduce((languages, { language }) => {
    languages.hasOwnProperty(language) ? languages[language]++ : (languages[language] = 1)
    return languages
  }, {})
*/

// Short Solution
const countLanguages = list =>
  list.reduce((languages, { language }) => ((languages[language] = (languages[language] || 0) + 1), languages), {})

// Function Export
module.exports = countLanguages
