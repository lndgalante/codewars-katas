const duplicates = require('.')

test('Test 1', () => {
  expect(duplicates([1, 2, 5, 6, 5, 2])).toBe(2)
})

test('Test 2', () => {
  expect(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])).toBe(4)
})

test('Test 3', () => {
  expect(duplicates([0, 0, 0, 0, 0, 0, 0])).toBe(3)
})

test('Test 4', () => {
  expect(duplicates([1000, 1000])).toBe(1)
})

test('Test 5', () => {
  expect(duplicates([])).toBe(0)
})

test('Test 6', () => {
  expect(duplicates([54])).toBe(0)
})
