/*
  Title:
    Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

  Description:
    You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

    Your task is to return one of the following strings:

      - < firstName here >, < country here > of the first Python developer who has signed up; or
      - There will be no Python developers if no Python developer has signed up.

  Examples:
    var list1 = [
      { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
      { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
    ];

    your function should return Victoria, Puerto Rico.

  Notes:
    The input array will always be valid and formatted as in the example above.

  Kata Link:
    https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer

  Discuss Link:
    https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer/solutions
*/

// Long Solution
const getFirstPython = list => {
  const pythonDev = list.find(({ language }) => language === 'Python')
  return pythonDev ? `${pythonDev.firstName}, ${pythonDev.country}` : 'There will be no Python developers'
}

// Function Export
module.exports = getFirstPython
