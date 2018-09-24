const sumOfDifferences = require('.')

test('Test 1', () => {
  expect(sumOfDifferences([1, 2, 10])).toBe(9)
})

test('Test 2', () => {
  expect(sumOfDifferences([-3, -2, -1])).toBe(2)
})
