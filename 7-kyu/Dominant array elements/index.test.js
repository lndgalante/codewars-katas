const solve = require('.')

test('Test 1', () => {
  expect(solve([16, 17, 14, 3, 14, 5, 2])).toEqual([17, 14, 5, 2])
})

test('Test 2', () => {
  expect(solve([92, 52, 93, 31, 89, 87, 77, 105])).toEqual([105])
})

test('Test 3', () => {
  expect(solve([75, 47, 42, 56, 13, 55])).toEqual([75, 56, 55])
})

test('Test 4', () => {
  expect(solve([67, 54, 27, 85, 66, 88, 31, 24, 49])).toEqual([88, 49])
})

test('Test 5', () => {
  expect(solve([76, 17, 25, 36, 29])).toEqual([76, 36, 29])
})

test('Test 6', () => {
  expect(solve([104, 18, 37, 9, 36, 47, 28])).toEqual([104, 47, 28])
})
