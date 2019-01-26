const lowestTemp = require('.')

test('Test 1', () => {
  expect(lowestTemp('')).toBeNull()
})

test('Test 2', () => {
  expect(lowestTemp('-1 50 -4 20 22 -7 0 10 -8')).toBe(-8)
})

test('Test 3', () => {
  expect(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14')).toBe(-43)
})
