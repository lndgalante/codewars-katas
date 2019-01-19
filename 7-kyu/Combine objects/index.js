/*
  Title:
    Combine objects

  Description:
    Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
    All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.


  Examples:
    const objA = { a: 10, b: 20, c: 30 }
    const objB = { a: 3, c: 6, d: 3 }
    combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

  Notes:
    The combine function should be a good citizen, so should not mutate the input objects.

  Kata Link:
    https://www.codewars.com/kata/combine-objects

  Discuss Link:
    https://www.codewars.com/kata/combine-objects/discuss

  Solutions Link:
    https://www.codewars.com/kata/combine-objects/solutions
*/

// Long Solution
const combine = (...objects) =>
  objects.reduce((result, object) => {
    for (const key in object) {
      if (result[key]) {
        result[key] += object[key]
      } else result[key] = object[key]
    }

    return result
  }, {})

// Function Export
module.exports = combine
