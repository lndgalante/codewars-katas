const take = require('.')

test('Test 1', () => {
  expect(take([0, 1, 2, 3, 5, 8, 13], 3)).toEqual([0, 1, 2])
})
