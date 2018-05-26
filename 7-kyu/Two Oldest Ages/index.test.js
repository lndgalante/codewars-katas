const twoOldestAges = require('.')

test('Test 1', () => {
  expect(twoOldestAges([1, 2, 10, 8])).toEqual([8, 10])
})
