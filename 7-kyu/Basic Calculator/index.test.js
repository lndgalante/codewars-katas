const calculate = require('.')

test('Test 1', () => {
  expect(calculate(3.2, '+', 8)).toBe(11.2)
})

test('Test 2', () => {
  expect(calculate(3.2, '-', 8)).toBe(-4.8)
})

test('Test 3', () => {
  expect(calculate(3.2, '/', 8)).toBe(0.4)
})

test('Test 4', () => {
  expect(calculate(3.2, '*', 8)).toBe(25.6)
})

test('Test 5', () => {
  expect(calculate(-3, '+', 0)).toBe(-3)
})

test('Test 6', () => {
  expect(calculate(-3, '-', 0)).toBe(-3)
})

test('Test 7', () => {
  expect(calculate(-3, '/', 0)).toBeNull()
})

test('Test 8', () => {
  expect(calculate(-3, '*', 0)).toBe(-0)
})

test('Test 9', () => {
  expect(calculate(-3, 'w', 0)).toBeNull()
})
