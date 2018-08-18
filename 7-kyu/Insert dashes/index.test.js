const insertDash = require('.')

test('Test 1', () => {
  expect(insertDash(454793)).toBe('4547-9-3')
})

test('Test 2', () => {
  expect(insertDash(123456)).toBe('123456')
})

test('Test 3', () => {
  expect(insertDash(1003567)).toBe('1003-567')
})
