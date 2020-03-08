const calculateTotal = require('.')

test('Test 1', () => {
  expect(calculateTotal(5, 5, 10)).toBe(5.75)
})

test('Test 2', () => {
  expect(calculateTotal(36.97, 7, 15)).toBe(45.1)
})

test('Test 3', () => {
  expect(calculateTotal(0, 6, 18)).toBe(0)
})

test('Test 4', () => {
  expect(calculateTotal(80.94, 0, 20)).toBe(97.13)
})

test('Test 5', () => {
  expect(calculateTotal(54.96, 8, 0)).toBe(59.36)
})
