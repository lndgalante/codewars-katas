const betterThanAverage = require('.')

test('Test 1', () => {
  expect(betterThanAverage([2, 3], 5)).toBeTruthy()
})

test('Test 2', () => {
  expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBeTruthy()
})

test('Test 3', () => {
  expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBeFalsy()
})
