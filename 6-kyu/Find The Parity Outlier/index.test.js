const findOutlier = require('./index')

test('Test 1', () => {
  expect(findOutlier([0, 1, 2])).toBe(1)
})

test('Test 2', () => {
  expect(findOutlier([1, 2, 3])).toBe(2)
})

test('Test 3', () => {
  expect(findOutlier([2, 6, 8, 10, 3])).toBe(3)
})

test('Test 4', () => {
  expect(findOutlier([2, 6, 8, 10, 3])).toBe(3)
})

test('Test 5', () => {
  expect(findOutlier([0, 0, 3, 0, 0])).toBe(3)
})

test('Test 6', () => {
  expect(findOutlier([1, 1, 0, 1, 1])).toBe(0)
})

test('Test 7', () => {
  expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11)
})

test('Test 8', () => {
  expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160)
})
