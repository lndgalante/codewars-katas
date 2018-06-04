const isSortedAndHow = require('.')

test('Test 1', () => {
  expect(isSortedAndHow([1, 2])).toBe('yes, ascending')
})

test('Test 2', () => {
  expect(isSortedAndHow([15, 7, 3, -8])).toBe('yes, descending')
})

test('Test 3', () => {
  expect(isSortedAndHow([4, 2, 30])).toBe('no')
})
