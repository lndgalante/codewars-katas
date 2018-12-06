const isPronic = require('.')

test('Test 1', () => {
  expect(isPronic(0)).toBeTrue()
})

test('Test 2', () => {
  expect(isPronic(1)).toBeFalse()
})

test('Test 3', () => {
  expect(isPronic(2)).toBeTrue()
})

test('Test 4', () => {
  expect(isPronic(3)).toBeFalse()
})

test('Test 5', () => {
  expect(isPronic(4)).toBeFalse()
})

test('Test 6', () => {
  expect(isPronic(5)).toBeFalse()
})

test('Test 7', () => {
  expect(isPronic(6)).toBeTrue()
})

test('Test 8', () => {
  expect(isPronic(-3)).toBeFalse()
})

test('Test 9', () => {
  expect(isPronic(-27)).toBeFalse()
})
