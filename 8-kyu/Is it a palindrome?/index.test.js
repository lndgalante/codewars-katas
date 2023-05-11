const isPalindrome = require('.')

test('Test 1', () => {
  expect(isPalindrome('a')).toBeTruthy()
})

test('Test 2', () => {
  expect(isPalindrome('aba')).toBeTruthy()
})

test('Test 3', () => {
  expect(isPalindrome('Abba')).toBeTruthy()
})

test('Test 4', () => {
  expect(isPalindrome('hello')).toBeFalsy()
})

test('Test 5', () => {
  expect(isPalindrome('Bob')).toBeTruthy()
})

test('Test 6', () => {
  expect(isPalindrome('Madam')).toBeTruthy()
})

test('Test 7', () => {
  expect(isPalindrome('AbBa')).toBeTruthy()
})

test('Test 8', () => {
  expect(isPalindrome('')).toBeTruthy()
})
