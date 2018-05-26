const multiply = require('.')

test('Test 1', () => {
  expect(multiply(2, 4)).toBe(8)
})

test('Test 2', () => {
  expect(multiply(100, 2)).toBe(200)
})

test('Test 3', () => {
  expect(multiply(-2, 100)).toBe(-200)
})
