/*
  Title:
    Return Specifics from an Object.

  Description:
    Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

    - array should return numbers first then all the method names in the order they are in the object
    - strings, booleans, arrays should be ignored.
    - if the object is empty, then the array should return the following string: The Object is Empty

  Examples:
    returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
    This would return [1,2,3,'e']

  Kata Link:
    https://www.codewars.com/kata/return-specifics-from-an-object

  Discuss Link:
    https://www.codewars.com/kata/return-specifics-from-an-object/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-specifics-from-an-object/solutions
*/

// Long Solution
const { isEmpty } = require('lodash')

const returnSpecifics = object => {
  if (isEmpty(object)) return ['The Object is Empty']

  const [numbers, functions] = Object.entries(object).reduce(
    (acc, [key, value]) => {
      const [numbers, functions] = acc

      if (typeof value === 'number') return [[...numbers, value], [...functions]]
      if (typeof value === 'function') return [[...numbers], [...functions, key]]

      return acc
    },
    [[], []]
  )

  return [...numbers, ...functions]
}

// Function Export
module.exports = returnSpecifics
