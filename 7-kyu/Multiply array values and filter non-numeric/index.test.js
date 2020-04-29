const multiplyAndFilter = require('.')

test('Test 1', () => {
  expect(multiplyAndFilter([1, 2, 3, 4], 1.5)).toEqual([1.5, 3, 4.5, 6])
})

test('Test 2', () => {
  expect(multiplyAndFilter([1, 2, 3], 0)).toEqual([0, 0, 0])
})

test('Test 3', () => {
  expect(multiplyAndFilter([0, 0, 0], 2)).toEqual([0, 0, 0])
})
