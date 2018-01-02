const rowSumOddNumbers = require('./index.js')

test('Test 1', () => {
  expect(rowSumOddNumbers(1)).toBe(1)
})

test('Test 2', () => {
  expect(rowSumOddNumbers(2)).toBe(8)
})

test('Test 3', () => {
  expect(rowSumOddNumbers(42)).toBe(74088)
})
