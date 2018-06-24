const any = require('.')

test('Test 1', () => {
  expect(any([1, 2, 3, 4], v => v > 3)).toBeTrue()
})

test('Test 2', () => {
  expect(any([1, 2, 3, 4], v => v > 4)).toBeFalse()
})
