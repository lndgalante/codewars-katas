const squareOrSquareRoot = require('.')

test('Test 1', () => {
  expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1])
})

test('Test 2', () => {
  expect(squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toEqual([
    10,
    10201,
    25,
    25,
    1,
    1,
  ])
})

test('Test 3', () => {
  expect(squareOrSquareRoot([1, 2, 3, 4, 5, 6])).toEqual([1, 4, 9, 2, 25, 36])
})
