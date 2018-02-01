const bmi = require('./index.js')

test('Test 1', () => {
  expect(bmi(80, 1.8)).toBe('Normal')
})
