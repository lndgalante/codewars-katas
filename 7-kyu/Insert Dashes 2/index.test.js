const insertDashII = require('.')

test('Test 1', () => {
  expect(insertDashII(454793)).toBe('4547-9-3')
})

test('Test 2', () => {
  expect(insertDashII(123456)).toBe('123456')
})

test('Test 3', () => {
  expect(insertDashII(40546793)).toBe('4054*67-9-3')
})

test('Test 4', () => {
  expect(insertDashII(1012356895)).toBe('10123-56*89-5')
})
