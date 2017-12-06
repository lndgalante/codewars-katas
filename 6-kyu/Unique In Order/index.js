/* 
  Title:
    Unique In Order

  Description:
    Implement the function unique_in_order which takes as argument a sequence 
    and returns a list of items without any elements with the same value next
    to each other and preserving the original order of elements.

  Examples:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  
  Link:
    https://www.codewars.com/kata/unique-in-order
*/

// Long Solution
function uniqueInOrder(iterable) {
  if (typeof iterable === 'string') {
    iterable = iterable.split('')
  }

  return iterable.filter((el, index, array) => el !== array[index + 1])
}

// Function Export
module.exports = uniqueInOrder
