const dBScale = require('.')

test('Test 1', () => {
  const param = 10 ** -11
  expect(Math.round(dBScale(param))).toBe(10)
})
