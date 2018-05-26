const pointsPer48 = require('.')

test('Test 1', () => {
  expect(pointsPer48(12, 20)).toBe(28.8)
})

test('Test 2', () => {
  expect(pointsPer48(10, 10)).toBe(48.0)
})

test('Test 3', () => {
  expect(pointsPer48(5, 17)).toBe(14.1)
})

test('Test 4', () => {
  expect(pointsPer48(0, 0)).toBe(0)
})

test('Test 5', () => {
  expect(pointsPer48(30.8, 34.7)).toBe(42.6)
})

test('Test 6', () => {
  expect(pointsPer48(22.9, 33.8)).toBe(32.5)
})
