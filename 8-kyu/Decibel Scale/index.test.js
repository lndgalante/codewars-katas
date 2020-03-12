const dBScale = require('.')

test('Test 1', () => {
  const parameter = 10 ** -11
  expect(Math.round(dBScale(parameter))).toBe(10)
})
