const oddOne = require('.')

test('Test 1', () => {
  expect(oddOne([2, 4, 6, 7, 10])).toBe(3)
})

test('Test 2', () => {
  expect(oddOne([2, 16, 98, 10, 13, 78])).toBe(4)
})

test('Test 3', () => {
  expect(oddOne([4, -8, 98, -12, -7, 90, 100])).toBe(4)
})

test('Test 4', () => {
  expect(oddOne([2, 4, 6, 8])).toBe(-1)
})
