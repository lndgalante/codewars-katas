const orderWord = require('.')

test('Test 1', () => {
  expect(orderWord('Hello, World!')).toBe(' !,HWdellloor')
})

test('Test 2', () => {
  expect(orderWord('bobby')).toBe('bbboy')
})

test('Test 3', () => {
  expect(orderWord('b')).toBe('b')
})

test('Test 4', () => {
  expect(orderWord('')).toBe('Invalid String!')
})

test('Test 5', () => {
  expect(orderWord('completesolution')).toBe('ceeillmnooopsttu')
})

test('Test 6', () => {
  expect(orderWord('"][@!$*(^&%')).toBe('!"$%&(*@[]^')
})

test('Test 7', () => {
  expect(orderWord('i"d][@z!$r(^a&world%')).toBe('!"$%&(@[]^addilorrwz')
})

test('Test 8', () => {
  expect(orderWord(null)).toBe('Invalid String!')
})

test('Test 9', () => {
  expect(orderWord('cba')).toBe('abc')
})

test('Test 10', () => {
  expect(orderWord('abc')).toBe('abc')
})
