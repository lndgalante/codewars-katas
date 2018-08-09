const numbers = require('.')

test('Test 1', () => {
  expect(numbers(1, 4, 3, 2, 5)).toBeTrue()
})

test('Test 2', () => {
  expect(numbers(1, 'a', 3)).toBeFalse()
})

test('Test 3', () => {
  expect(numbers(1, 3, NaN)).toBeTrue()
})
