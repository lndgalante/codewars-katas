const sortByValueAndIndex = require('.')

test('Test 1', () => {
  expect(sortByValueAndIndex([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

test('Test 2', () => {
  expect(sortByValueAndIndex([23, 2, 3, 4, 5])).toEqual([2, 3, 4, 23, 5])
})

test('Test 3', () => {
  expect(sortByValueAndIndex([26, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 26])
})

test('Test 4', () => {
  expect(sortByValueAndIndex([9, 5, 1, 4, 3])).toEqual([1, 9, 5, 3, 4])
})
