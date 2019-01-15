const findMissingNumbers = require('.')

test('Test 1', () => {
  expect(findMissingNumbers([-3, -2, 1, 4])).toEqual([-1, 0, 2, 3])
})

test('Test 2', () => {
  expect(findMissingNumbers([-1, 0, 1, 2, 3, 4])).toEqual([])
})

test('Test 3', () => {
  expect(findMissingNumbers([])).toEqual([])
})
