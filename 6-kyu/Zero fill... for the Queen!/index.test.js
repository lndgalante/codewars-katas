const zeroFill = require('./index.js')

test('Test 1', () => {
  expect(zeroFill(11, 5)).toBe('00011')
})

test('Test 2', () => {
  expect(zeroFill(11, 11)).toBe('00000000011')
})

test('Test 3', () => {
  expect(zeroFill(-32, 5)).toBe('00032')
})

test('Test 4', () => {
  expect(zeroFill(0, 3)).toBe('000')
})
