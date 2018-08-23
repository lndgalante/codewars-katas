const double = require('.')

test('Test 1', () => {
  expect(double([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10])
})

test('Test 2', () => {
  expect(double([71, -548, 12.3, 31415])).toEqual([142, -1096, 24.6, 62830])
})
