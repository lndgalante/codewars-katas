const twoOldestAges = require('./index.js')

test('Test 1', () => {
  expect(twoOldestAges([1, 2, 10, 8])).toEqual([8, 10])
})
