const twoDecimalPlaces = require('.')

test('Test 1', () => {
  expect(twoDecimalPlaces(4.659725356)).toBe(4.66)
})

test('Test 2', () => {
  expect(twoDecimalPlaces(173735326.3783732637948948)).toBe(173735326.38)
})

test('Test 3', () => {
  expect(twoDecimalPlaces(4.653725356)).toBe(4.65)
})
