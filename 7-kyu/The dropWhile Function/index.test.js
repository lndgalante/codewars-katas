const dropWhile = require('.')

test('Test 1', () => {
  expect(dropWhile([2, 4, 6, 8, 1, 2, 5, 4, 3, 2], num => num % 2 === 0)).toEqual([1, 2, 5, 4, 3, 2])
})

test('Test 2', () => {
  expect(dropWhile([2, 4, 10, 100, 64, 78, 92], num => num % 2 === 0)).toEqual([])
})
