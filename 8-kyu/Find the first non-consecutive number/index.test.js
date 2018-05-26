const firstNonConsecutive = require('.')

test('Test 1', () => {
  expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6)
})
