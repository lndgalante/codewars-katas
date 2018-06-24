const solution = require('.')

test('Test 1', () => {
  expect(solution('abc', 'bc')).toBeTrue()
})

test('Test 2', () => {
  expect(solution('abc', 'd')).toBeFalse()
})
