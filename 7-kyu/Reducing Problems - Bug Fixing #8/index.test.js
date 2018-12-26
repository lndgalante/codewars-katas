const calculateTotal = require('.')

test('Test 1', () => {
  expect(calculateTotal([1, 2, 2], [1, 0, 0])).toBeTrue()
})

test('Test 2', () => {
  expect(calculateTotal([6, 45, 1], [1, 55, 0])).toBeFalse()
})

test('Test 3', () => {
  expect(calculateTotal([57, 2, 1], [])).toBeTrue()
})

test('Test 4', () => {
  expect(calculateTotal([], [3, 4, 3])).toBeFalse()
})
