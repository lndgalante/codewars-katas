const isSquare = require('.')

test('Test 1', () => {
  expect(isSquare([1, 4, 9, 16, 25, 36])).toBeTrue()
})

test('Test 2', () => {
  expect(isSquare([1, 2, 3, 4, 5, 6])).toBeFalse()
})

test('Test 3', () => {
  expect(isSquare([])).toBeUndefined()
})

test('Test 4', () => {
  expect(isSquare([1, 2, 4, 15])).toBeFalse()
})
