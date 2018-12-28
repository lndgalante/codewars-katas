const specialNumber = require('.')

test('Test 1', () => {
  expect(specialNumber(2)).toBe('Special!!')
})

test('Test 2', () => {
  expect(specialNumber(3)).toBe('Special!!')
})

test('Test 3', () => {
  expect(specialNumber(6)).toBe('NOT!!')
})

test('Test 4', () => {
  expect(specialNumber(9)).toBe('NOT!!')
})

test('Test 5', () => {
  expect(specialNumber(11)).toBe('Special!!')
})

test('Test 6', () => {
  expect(specialNumber(55)).toBe('Special!!')
})

test('Test 7', () => {
  expect(specialNumber(26)).toBe('NOT!!')
})

test('Test 8', () => {
  expect(specialNumber(92)).toBe('NOT!!')
})

test('Test 9', () => {
  expect(specialNumber(25432)).toBe('Special!!')
})

test('Test 10', () => {
  expect(specialNumber(2783)).toBe('NOT!!')
})
