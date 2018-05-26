const lowercaseCount = require('.')

test('Test 1', () => {
  expect(lowercaseCount('abc')).toBe(3)
})

test('Test 2', () => {
  expect(lowercaseCount('abcABC123')).toBe(3)
})

test('Test 3', () => {
  expect(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(3)
})

test('Test 4', () => {
  expect(lowercaseCount('')).toBe(0)
})

test('Test 5', () => {
  expect(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(0)
})

test('Test 6', () => {
  expect(lowercaseCount('abcdefghijklmnopqrstuvwxyz')).toBe(26)
})
