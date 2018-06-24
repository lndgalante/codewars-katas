const isIsogram = require('.')

test('Test 1', () => {
  expect(isIsogram('Dermatoglyphics')).toBeTrue()
})

test('Test 2', () => {
  expect(isIsogram('isogram')).toBeTrue()
})

test('Test 3', () => {
  expect(isIsogram('aba')).toBeFalse()
})

test('Test 4', () => {
  expect(isIsogram('moOse')).toBeFalse()
})

test('Test 5', () => {
  expect(isIsogram('isIsogram')).toBeFalse()
})

test('Test 6', () => {
  expect(isIsogram('')).toBeTrue()
})
