const countBy = require('.')

test('Test 1', () => {
  expect(countBy(1, 5)).toEqual([1, 2, 3, 4, 5])
})

test('Test 2', () => {
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10])
})

test('Test 3', () => {
  expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
