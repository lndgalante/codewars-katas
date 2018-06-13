const findLongest = require('.')

test('Test 1', () => {
  expect(findLongest([1, 10, 100])).toBe(100)
})

test('Test 2', () => {
  expect(findLongest([9000, 8, 800])).toBe(9000)
})

test('Test 3', () => {
  expect(findLongest([8, 900, 500])).toBe(900)
})
