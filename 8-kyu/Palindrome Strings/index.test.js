const isPalindrome = require('.')

test('Test 1', () => {
  expect(isPalindrome('anna')).toBeTruthy()
})

test('Test 2', () => {
  expect(isPalindrome('walter')).toBeFalsy()
})

test('Test 3', () => {
  expect(isPalindrome(12321)).toBeTruthy()
})

test('Test 4', () => {
  expect(isPalindrome(123456)).toBeFalsy()
})

test('Test 5', () => {
  expect(isPalindrome('.')).toBeTruthy()
})

test('Test 6', () => {
  expect(isPalindrome('.!!.')).toBeTruthy()
})
