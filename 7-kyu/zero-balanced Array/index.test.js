const ìsZeroBalanced = require('.')

test('Test 1', () => {
  expect(ìsZeroBalanced([3])).toBeFalse()
})

test('Test 2', () => {
  expect(ìsZeroBalanced([0, 0, 0, 0, 0, 0])).toBeTrue()
})
