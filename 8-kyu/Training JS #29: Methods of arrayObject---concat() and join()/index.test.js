const bigToSmall = require('.')

test('Test 1', () => {
  expect(bigToSmall([[1, 2], [3, 4], [5, 6]])).toBe('6>5>4>3>2>1')
})

test('Test 2', () => {
  expect(bigToSmall([[1, 3, 5], [2, 4, 6]])).toBe('6>5>4>3>2>1')
})

test('Test 3', () => {
  expect(bigToSmall([[1, 1], [1], [1, 1]])).toBe('1>1>1>1>1')
})
