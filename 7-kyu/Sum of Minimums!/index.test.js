const sumOfMinimums = require('.')

test('Test 1', () => {
  expect(
    sumOfMinimums([
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [20, 21, 34, 56, 100],
    ]),
  ).toBe(26)
})

test('Test 2', () => {
  expect(
    sumOfMinimums([
      [7, 9, 8, 6, 2],
      [6, 3, 5, 4, 3],
      [5, 8, 7, 4, 5],
    ]),
  ).toBe(9)
})

test('Test 3', () => {
  expect(
    sumOfMinimums([
      [11, 12, 14, 54],
      [67, 89, 90, 56],
      [7, 9, 4, 3],
      [9, 8, 6, 7],
    ]),
  ).toBe(76)
})
