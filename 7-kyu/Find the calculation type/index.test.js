const calcType = require('.')

test('Test 1', () => {
  expect(calcType(1, 2, 3)).toBe('addition')
})

test('Test 2', () => {
  expect(calcType(10, 4, 40)).toBe('multiplication')
})

test('Test 3', () => {
  expect(calcType(10, 5, 5)).toBe('subtraction')
})

test('Test 4', () => {
  expect(calcType(9, 5, 1.8)).toBe('division')
})
