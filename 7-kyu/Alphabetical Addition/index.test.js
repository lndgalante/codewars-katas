const addLetters = require('.')

test('Test 1', () => {
  expect(addLetters('a','b','c')).toBe('f')
})

test('Test 2', () => {
  expect(addLetters('a','b')).toBe('c')
})

test('Test 3', () => {
  expect(addLetters('z')).toBe('z')
})

test('Test 4', () => {
  expect(addLetters('z','a')).toBe('a')
})

test('Test 5', () => {
  expect(addLetters('y','c','b')).toBe('d')
})

test('Test 6', () => {
  expect(addLetters()).toBe('z')
})
