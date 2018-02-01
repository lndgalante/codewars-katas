const xor = require('./index.js')

test('Test 1', () => {
  expect(xor(false, false)).toBeFalsy()
})

test('Test 2', () => {
  expect(xor(true, false)).toBeTruthy()
})

test('Test 3', () => {
  expect(xor(false, true)).toBeTruthy()
})

test('Test 4', () => {
  expect(xor(true, true)).toBeFalsy()
})

test('Test 5', () => {
  expect(!xor(true, true)).toBeTruthy()
})
