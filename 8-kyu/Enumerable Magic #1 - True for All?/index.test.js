const all = require('.')

test('Test 1', () => {
  expect(all([1, 2, 3, 4, 5], v => v < 9)).toBeTrue()
})

test('Test 2', () => {
  expect(all([1, 2, 3, 4, 5], v => v > 9)).toBeFalse()
})
