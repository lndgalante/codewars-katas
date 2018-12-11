const houseNumbersSum = require('.')

test('Test 1', () => {
  expect(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])).toBe(11)
})

test('Test 2', () => {
  expect(houseNumbersSum([4, 2, 1, 6, 0])).toBe(13)
})

test('Test 3', () => {
  expect(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])).toBe(10)
})

test('Test 4', () => {
  expect(houseNumbersSum([0, 1, 2, 3, 4, 5])).toBe(0)
})
