const { func, map } = require('.')

test('Test 1', () => {
  expect(map([27, 18, 5, '8', '66'], func)).toEqual([false, true, false, true, true])
})

test('Test 2', () => {
  expect(map([48, 33, 2, 1], 'str')).toBe('given argument is not a function')
})

test('Test 3', () => {
  expect(map([8, 12, 't'], func)).toBe('array should contain only numbers')
})
