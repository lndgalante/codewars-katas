const sif = require('./index.js')

test('Test 1', () => {
  expect(sif.findSmallestInt([78, 56, 232, 12, 8])).toBe(8)
})

test('Test 2', () => {
  expect(sif.findSmallestInt([78, 56, 232, 12, 18])).toBe(12)
})

test('Test 3', () => {
  expect(sif.findSmallestInt([78, 56, 232, 412, 228])).toBe(56)
})

test('Test 4', () => {
  expect(sif.findSmallestInt([78, 56, 232, 12, 0])).toBe(0)
})

test('Test 5', () => {
  expect(sif.findSmallestInt([1, 56, 232, 12, 8])).toBe(1)
})
