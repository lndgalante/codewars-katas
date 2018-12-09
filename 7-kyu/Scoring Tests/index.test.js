const scoreTest = require('.')

test('Test 1', () => {
  expect(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)).toBe(9)
})

test('Test 2', () => {
  expect(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)).toBe(3)
})
