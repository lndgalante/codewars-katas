/*
  Title:
    List Filtering

  Description:
    In this kata you will create a function that takes a list of non-negative
    integers and strings and returns a new list with the strings filtered out.

  Examples:
    filter_list([1, 2, 'a', 'b']) == [1, 2]
    filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
    filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

  Kata Link:
    https://www.codewars.com/kata/list-filtering

  Discuss Link:
    https://www.codewars.com/kata/list-filtering/discuss

  Solutions Link:
    https://www.codewars.com/kata/list-filtering/solutions
*/

// Long Solution
/*
function filter_list(l) {
  return l.filter(el => Number.isInteger(el))
}
*/

// Short Solution
const filter_list = l => l.filter(el => Number.isInteger(el))

// Function Export
module.exports = filter_list
