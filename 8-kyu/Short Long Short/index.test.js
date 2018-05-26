const solution = require('.')

test('Test 1', () => {
  expect(solution('1', '22')).toBe('1221')
})

test('Test 2', () => {
  expect(solution('22', '1')).toBe('1221')
})
