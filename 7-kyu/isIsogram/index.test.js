const isIsogram = require('./index.js')

test('Test 1', () => {
  expect(isIsogram('Dermatoglyphics')).toBeTruthy()
})

test('Test 2', () => {
  expect(isIsogram('isogram')).toBeTruthy()
})

test('Test 3', () => {
  expect(isIsogram('aba')).toBeFalsy()
})

test('Test 4', () => {
  expect(isIsogram('moOse')).toBeFalsy()
})

test('Test 5', () => {
  expect(isIsogram('isIsogram')).toBeFalsy()
})

test('Test 6', () => {
  expect(isIsogram('')).toBeTruthy()
})
