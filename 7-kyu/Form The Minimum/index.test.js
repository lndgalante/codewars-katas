const minValue = require('.')

test('Test 1', () => {
  expect(minValue([1, 3, 1])).toBe(13)
})

test('Test 2', () => {
  expect(minValue([4, 7, 5, 7])).toBe(457)
})

test('Test 3', () => {
  expect(minValue([4, 8, 1, 4])).toBe(148)
})

test('Test 4', () => {
  expect(minValue([5, 7, 9, 5, 7])).toBe(579)
})

test('Test 5', () => {
  expect(minValue([6, 7, 8, 7, 6, 6])).toBe(678)
})

test('Test 6', () => {
  expect(minValue([5, 6, 9, 9, 7, 6, 4])).toBe(45679)
})

test('Test 7', () => {
  expect(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])).toBe(134679)
})

test('Test 8', () => {
  expect(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toBe(356789)
})

test('Test 9', () => {
  expect(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1)
})

test('Test 10', () => {
  expect(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0)
})
