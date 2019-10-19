const factors = require('.')

test('Test 1', () => {
  expect(factors(54)).toEqual([54, 27, 18, 9, 6, 3, 2, 1])
})

test('Test 2', () => {
  expect(factors(9)).toEqual([9, 3, 1])
})
