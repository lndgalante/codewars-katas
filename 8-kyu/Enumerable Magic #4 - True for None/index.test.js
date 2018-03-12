const none = require('./index.js')

test('Test 1', () => {
  expect(none([1, 2, 3, 4, 5], item => item > 5)).toBeTruthy()
})

test('Test 2', () => {
  expect(none([1, 2, 3, 4, 5], item => item > 4)).toBeFalsy()
})
