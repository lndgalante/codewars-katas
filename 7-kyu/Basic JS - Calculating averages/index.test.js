const Calculator = require('.')

test('Test 1', () => {
  expect(Calculator.average(3, 4, 5)).toBe(4)
})
