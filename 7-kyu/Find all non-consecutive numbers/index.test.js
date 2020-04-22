const allNonConsecutive = require('.')

test('Test 1', () => {
  expect(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])).toEqual([
    { i: 4, n: 6 },
    { i: 7, n: 10 },
  ])
})
