const multiply = require('.')

test('Test 1', () => {
  expect(multiply(10)).toBe(250)
})

test('Test 2', () => {
  expect(multiply(5)).toBe(25)
})

test('Test 3', () => {
  expect(multiply(200)).toBe(25000)
})

test('Test 4', () => {
  expect(multiply(0)).toBe(0)
})

test('Test 5', () => {
  expect(multiply(-2)).toBe(-10)
})
