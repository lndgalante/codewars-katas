const predictAge = require('.')

test('Test 1', () => {
  expect(predictAge(65, 60, 75, 55, 60, 63, 64, 45)).toBe(86)
})
