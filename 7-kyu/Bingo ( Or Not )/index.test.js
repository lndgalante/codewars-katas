const bingo = require('.')

test('Test 1', () => {
  expect(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe('LOSE')
})

test('Test 2', () => {
  expect(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])).toBe('WIN')
})
