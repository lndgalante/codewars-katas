/*
  Title:
    Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

  Description:
    You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return:
      - true if at least one Ruby developer has signed up; or
      - false if there will be no Ruby developers.


  Examples:
    var list1 = [
      { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
      { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
      { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
    ];

    your function should return true.

  Notes:
    The input array will always be valid and formatted as in the example above.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming/solutions
*/

// Long Solution
const isRubyComing = list => list.some(({ language }) => language === 'Ruby')

// Function Export
module.exports = isRubyComing
