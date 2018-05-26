const checkAlive = require('.')

test('Test 1', () => {
  expect(checkAlive(5)).toBeTruthy()
})

test('Test 2', () => {
  expect(checkAlive(0)).toBeFalsy()
})
