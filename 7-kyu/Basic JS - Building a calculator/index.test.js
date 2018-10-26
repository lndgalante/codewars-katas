const Calculator = require('.')

test('Test 1', () => {
  expect(Calculator.add(2, 3)).toBe(5)
})

test('Test 2', () => {
  expect(Calculator.subtract(2, 3)).toBe(-1)
})

test('Test 3', () => {
  expect(Calculator.multiply(2, 3)).toBe(6)
})

test('Test 4', () => {
  expect(Calculator.divide(9, 3)).toBe(3)
})
