/* eslint no-extend-native: 0 */
/* eslint no-array-constructor: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Remove All The Marked Elements of a List

  Description:
    Define a method/function that removes from a given array of integers all the values contained in a second array.

  Examples:
    l = List()

    integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
    values_list = [1, 3]
    l.remove_(integer_list, values_list) == [2, 2, 4]

    integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
    lst = [1, 3, 4, 2]
    l.remove_(integer_list, values_list) == [5, 6 ,7 ,8]

    integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
    lst = [2, 4, 3]
    l.remove_(integer_list, values_list) == [8, 7, 6, 5, 1]

  Kata Link:
    https://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list

  Discuss Link:
    https://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list/solutions
*/

// Long Solution
Array.prototype.remove = (integerList, valueList) =>
  integerList.filter(integer => !valueList.includes(integer))

// Function Export
module.exports = Array
