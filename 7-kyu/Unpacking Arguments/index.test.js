const spread = require('.')

test('Test 1', () => {
  expect(spread((x, y) => x + y, [1, 2])).toBe(3)
})
