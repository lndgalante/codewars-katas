const getChar = require('.')

test('Test 1', () => {
  expect(getChar(55)).toBe('7')
})

test('Test 2', () => {
  expect(getChar(56)).toBe('8')
})

test('Test 3', () => {
  expect(getChar(57)).toBe('9')
})

test('Test 4', () => {
  expect(getChar(58)).toBe(':')
})

test('Test 5', () => {
  expect(getChar(59)).toBe(';')
})

test('Test 6', () => {
  expect(getChar(60)).toBe('<')
})

test('Test 7', () => {
  expect(getChar(61)).toBe('=')
})

test('Test 8', () => {
  expect(getChar(62)).toBe('>')
})

test('Test 9', () => {
  expect(getChar(63)).toBe('?')
})

test('Test 10', () => {
  expect(getChar(64)).toBe('@')
})

test('Test 11', () => {
  expect(getChar(65)).toBe('A')
})
