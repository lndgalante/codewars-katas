const isPalindrome = require('.')

test('Test 1', () => {
  expect(isPalindrome('anna')).toBeTrue()
})

test('Test 2', () => {
  expect(isPalindrome('walter')).toBeFalse()
})

test('Test 3', () => {
  expect(isPalindrome(12321)).toBeTrue()
})

test('Test 4', () => {
  expect(isPalindrome(123456)).toBeFalse()
})

test('Test 5', () => {
  expect(isPalindrome('.')).toBeTrue()
})

test('Test 6', () => {
  expect(isPalindrome('.!!.')).toBeTrue()
})
