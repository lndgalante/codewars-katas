const hasOneChar = require('.')

test('Test 1', () => {
  expect(hasOneChar('a')).toBeTrue()
})

test('Test 2', () => {
  expect(hasOneChar('aaaaa')).toBeTrue()
})

test('Test 3', () => {
  expect(hasOneChar('aaaab')).toBeFalse()
})

test('Test 4', () => {
  expect(hasOneChar('bbbbb')).toBeTrue()
})
