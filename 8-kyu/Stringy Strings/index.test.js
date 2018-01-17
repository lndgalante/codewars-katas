const stringy = require('./index.js')

test('Test 1', () => {
  expect(typeof stringy(3)).toBe('string')
})

test('Test 2', () => {
  expect(stringy(3)[0]).toBe('1')
})

test('Test 3', () => {
  expect(stringy(4)).toBe('1010')
})

test('Test 4', () => {
  expect(stringy(6)).toBe('101010')
})

test('Test 5', () => {
  expect(stringy(12)).toBe('101010101010')
})
