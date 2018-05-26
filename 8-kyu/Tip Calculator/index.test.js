const calculateTip = require('.')

test('Test 1', () => {
  expect(calculateTip(20, 'Excellent')).toBe(4)
})

test('Test 2', () => {
  expect(calculateTip(26.95, 'good')).toBe(3)
})
