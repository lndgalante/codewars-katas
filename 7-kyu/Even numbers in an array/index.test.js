const evenNumbers = require('.')

test('Test 1', () => {
  expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8])
})

test('Test 2', () => {
  expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toEqual([-8, 26])
})

test('Test 3', () => {
  expect(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toEqual([6])
})
