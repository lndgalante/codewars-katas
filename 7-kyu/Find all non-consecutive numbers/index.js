/*
  Title:
    Find all non-consecutive numbers

  Description:
    Your task is to find all the elements of an array that are non consecutive.

    A number is non consecutive if it is not exactly one larger than the previous element in the array.
    The first element gets a pass and is never considered non consecutive.

    Create a function named allNonConsecutive

    E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.
    You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

    E.g., for the above array the result should be:
    [
      {i: 4, n:6},
      {i: 7, n:10}
    ]
    [
      {'i': 4, 'n': 6},
      {'i': 7, 'n': 10}
    ]
    [ ( 4, 6 )
    , ( 7, 10 )
    ]
    [
      ( 4, 6 ),
      ( 7, 10 )
    ]

    If the whole array is consecutive or has one element then return an empty array.

    The array elements will all be numbers. The numbers will also all be unique and in ascending order.
    The numbers could be positive and/or negetive.

  Kata Link:
    https://www.codewars.com/kata/58f8b35fda19c0c79400020f

  Discuss Link:
    https://www.codewars.com/kata/58f8b35fda19c0c79400020f/discuss

  Solutions Link:
    https://www.codewars.com/kata/58f8b35fda19c0c79400020f/solutions
*/

// Long Solution
const allNonConsecutive = (array) => {
  return array.reduce((acc, number, index) => {
    const nextIndex = index + 1
    const nextNumber = array[nextIndex]

    if (typeof nextNumber === 'undefined' || number + 1 === nextNumber) return acc
    return [...acc, { i: nextIndex, n: nextNumber }]
  }, [])
}

// Function Export
module.exports = allNonConsecutive
