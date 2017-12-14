const digPow = require('./index')

test('Test 1', () => {
  expect(digPow(89, 1)).toBe(1)
})

test('Test 2', () => {
  expect(digPow(92, 1)).toBe(-1)
})

test('Test 3', () => {
  expect(digPow(46288, 3)).toBe(51)
})
