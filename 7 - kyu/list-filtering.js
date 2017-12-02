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

  Link:
    https://www.codewars.com/kata/list-filtering
*/

// Long Solution
// function filter_list(l) {
//   return l.filter(el => Number.isInteger(el))
// }

// Short Solution
const filter_list = l => l.filter(el => Number.isInteger(el))

// Test to pass
console.log(filter_list([1, 2, 'a', 'b']))
// => It should return [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15]))
// => It should return [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))
// => It should return [1, 2, 123]
