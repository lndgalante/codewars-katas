const checkAlive = require('.')

test('Test 1', () => {
  expect(checkAlive(5)).toBeTrue()
})

test('Test 2', () => {
  expect(checkAlive(0)).toBeFalse()
})
