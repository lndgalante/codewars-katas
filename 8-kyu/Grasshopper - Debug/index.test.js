const weatherInfo = require('.')

test('Test 1', () => {
  expect(weatherInfo(50)).toBe('10 is above freezing temperature')
})

test('Test 2', () => {
  expect(weatherInfo(23)).toBe('-5 is freezing temperature')
})
