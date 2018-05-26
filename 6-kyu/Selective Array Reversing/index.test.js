const selReverse = require('.')

test('Test 1', () => {
  expect(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)).toEqual([
    6,
    4,
    2,
    12,
    10,
    8,
    16,
    14,
  ])
})

test('Test 2', () => {
  expect(selReverse([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 1, 4, 3, 6, 5])
})
