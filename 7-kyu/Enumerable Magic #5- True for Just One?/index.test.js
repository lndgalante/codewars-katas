const one = require('.')

test('Test 1', () => {
  expect(one([1, 2, 3, 4, 5], item => item < 2)).toBeTrue()
})

test('Test 2', () => {
  expect(one([1, 2, 3, 4, 5], item => item % 2)).toBeFalse()
})

test('Test 3', () => {
  expect(one([1, 2, 3, 4, 5], item => item > 5)).toBeFalse()
})
