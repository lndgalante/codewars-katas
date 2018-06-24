const amIWilson = require('.')

test('Test 1', () => {
  expect(amIWilson(5)).toBeTrue()
})

test('Test 2', () => {
  expect(amIWilson(9)).toBeFalse()
})

test('Test 3', () => {
  expect(amIWilson(6)).toBeFalse()
})
