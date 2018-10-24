const repeats = require('.')

test('Test 1', () => {
  expect(repeats([4, 5, 7, 5, 4, 8])).toBe(15)
})

test('Test 2', () => {
  expect(repeats([9, 10, 19, 13, 19, 13])).toBe(19)
})

test('Test 3', () => {
  expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).toBe(12)
})

test('Test 4', () => {
  expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).toBe(22)
})

test('Test 5', () => {
  expect(repeats([5, 10, 19, 13, 10, 13])).toBe(24)
})
