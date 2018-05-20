const sum = require('./index.js')

test('Test 1', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55)
})

test('Test 2', () => {
  expect(sum([71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38])).toBe(
    32830.6
  )
})
