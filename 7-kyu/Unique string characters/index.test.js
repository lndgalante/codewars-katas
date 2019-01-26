const solve = require('.')

test('Test 1', () => {
  expect(solve('xyab', 'xzca')).toBe('ybzc')
})

test('Test 2', () => {
  expect(solve('xyabb', 'xzca')).toBe('ybbzc')
})

test('Test 3', () => {
  expect(solve('abcd', 'xyz')).toBe('abcdxyz')
})

test('Test 4', () => {
  expect(solve('xxx', 'xzca')).toBe('zca')
})
