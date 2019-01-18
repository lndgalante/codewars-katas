const stantonMeasure = require('.')

test('Test 1', () => {
  expect(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])).toBe(3)
})
