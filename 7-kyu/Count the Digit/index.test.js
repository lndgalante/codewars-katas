const nbDig = require('./index.js')

test('Test 1', () => {
  expect(nbDig(5750, 0)).toBe(4700)
})

test('Test 2', () => {
  expect(nbDig(11011, 2)).toBe(9481)
})

test('Test 3', () => {
  expect(nbDig(12224, 8)).toBe(7733)
})

test('Test 4', () => {
  expect(nbDig(11549, 1)).toBe(11905)
})
