const sequenceSum = require('.')

test('Test 1', () => {
  expect(sequenceSum(2, 6, 2)).toBe(12)
})

test('Test 2', () => {
  expect(sequenceSum(1, 5, 1)).toBe(15)
})

test('Test 3', () => {
  expect(sequenceSum(1, 5, 3)).toBe(5)
})
