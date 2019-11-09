const calculateScore = require('.')

test('Test 1', () => {
  expect(calculateScore([], 0)).toBe(0)
})

test('Test 2', () => {
  expect(calculateScore([2, 3, 5], 3)).toBe(-40)
})
