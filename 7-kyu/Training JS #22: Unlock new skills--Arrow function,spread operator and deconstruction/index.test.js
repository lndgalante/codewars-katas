const shuffleIt = require('.')

test('Test 1', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2])).toEqual([1, 3, 2, 4, 5])
})

test('Test 2', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])).toEqual([1, 3, 2, 5, 4])
})

test('Test 3', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])).toEqual([1, 3, 5, 2, 4])
})
