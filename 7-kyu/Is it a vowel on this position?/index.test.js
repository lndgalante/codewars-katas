const checkVowel = require('.')

test('Test 1', () => {
  expect(checkVowel('cat', 1)).toBeTrue()
})

test('Test 2', () => {
  expect(checkVowel('cat', 0)).toBeFalse()
})

test('Test 3', () => {
  expect(checkVowel('cat', 4)).toBeFalse()
})

test('Test 5', () => {
  expect(checkVowel('Amanda', -2)).toBeFalse()
})

test('Test 6', () => {
  expect(checkVowel('Amanda', 0)).toBeTrue()
})

test('Test 7', () => {
  expect(checkVowel('Amanda', 2)).toBeTrue()
})
