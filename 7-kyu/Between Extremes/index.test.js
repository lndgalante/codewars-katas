const betweenExtremes = require('.')

test('Test 1', () => {
  expect(betweenExtremes([21, 34, 54, 43, 26, 12])).toBe(42)
})

test('Test 2', () => {
  expect(betweenExtremes([-1, -41, -77, -100])).toBe(99)
})
