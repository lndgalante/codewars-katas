const calculateYears = require('.')

test('Test 1', () => {
  expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3)
})

test('Test 2', () => {
  expect(calculateYears(1000, 0.01625, 0.18, 1200)).toBe(14)
})

test('Test 3', () => {
  expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0)
})
