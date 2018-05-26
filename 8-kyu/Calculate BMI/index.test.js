const bmi = require('.')

test('Test 1', () => {
  expect(bmi(80, 1.8)).toBe('Normal')
})
