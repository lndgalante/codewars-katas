const amIWilson = require('./index.js')

test('Test 1', () => {
  expect(amIWilson(5)).toBeTruthy()
})

test('Test 2', () => {
  expect(amIWilson(9)).toBeFalsy()
})

test('Test 3', () => {
  expect(amIWilson(6)).toBeFalsy()
})
