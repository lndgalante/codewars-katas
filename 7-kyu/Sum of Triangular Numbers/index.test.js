const sumTriangularNumbers = require('.')

test('Test 1', () => {
  expect(sumTriangularNumbers(6)).toBe(56)
})

test('Test 2', () => {
  expect(sumTriangularNumbers(34)).toBe(7140)
})

test('Test 3', () => {
  expect(sumTriangularNumbers(-291)).toBe(0)
})

test('Test 4', () => {
  expect(sumTriangularNumbers(943)).toBe(140205240)
})

test('Test 5', () => {
  expect(sumTriangularNumbers(-971)).toBe(0)
})
