const divisibleBy = require('.')

test('Test 1', () => {
  expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6])
})
