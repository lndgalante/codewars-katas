const solution = require('.')

test('Test 1', () => {
  expect(solution('abcdeb', 'b')).toBe(2)
})

test('Test 2', () => {
  expect(solution('abc', 'b')).toBe(1)
})

test('Test 3', () => {
  expect(solution('abbc', 'bb')).toBe(1)
})
