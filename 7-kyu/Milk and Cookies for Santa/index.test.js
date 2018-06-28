const timeForMilkAndCookies = require('.')

test('Test 1', () => {
  expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toBeTrue()
})

test('Test 2', () => {
  expect(timeForMilkAndCookies(new Date(2013, 10, 24))).toBeFalse()
})
