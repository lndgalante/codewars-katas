const jumpingNumber = require('.')

test('Test 1', () => {
  expect(jumpingNumber(1)).toBe('Jumping!!')
})

test('Test 2', () => {
  expect(jumpingNumber(7)).toBe('Jumping!!')
})

test('Test 3', () => {
  expect(jumpingNumber(9)).toBe('Jumping!!')
})

test('Test 4', () => {
  expect(jumpingNumber(23)).toBe('Jumping!!')
})

test('Test 5', () => {
  expect(jumpingNumber(32)).toBe('Jumping!!')
})

test('Test 6', () => {
  expect(jumpingNumber(79)).toBe('Not!!')
})

test('Test 7', () => {
  expect(jumpingNumber(98)).toBe('Jumping!!')
})

test('Test 8', () => {
  expect(jumpingNumber(8987)).toBe('Jumping!!')
})

test('Test 9', () => {
  expect(jumpingNumber(4343456)).toBe('Jumping!!')
})

test('Test 10', () => {
  expect(jumpingNumber(98789876)).toBe('Jumping!!')
})
