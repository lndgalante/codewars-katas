const include = require('.')

test('Test 1', () => {
  expect(include([1, 2, 3, 4], 3)).toBeTrue()
})

test('Test 2', () => {
  expect(include([1, 2, 4, 5], 3)).toBeFalse()
})
