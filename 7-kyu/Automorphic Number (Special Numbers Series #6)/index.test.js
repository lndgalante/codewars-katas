const automorphic = require('.')

test('Test 1', () => {
  expect(automorphic(1)).toBe('Automorphic')
})

test('Test 2', () => {
  expect(automorphic(3)).toBe('Not!!')
})

test('Test 3', () => {
  expect(automorphic(6)).toBe('Automorphic')
})

test('Test 4', () => {
  expect(automorphic(9)).toBe('Not!!')
})

test('Test 5', () => {
  expect(automorphic(25)).toBe('Automorphic')
})

test('Test 6', () => {
  expect(automorphic(53)).toBe('Not!!')
})

test('Test 7', () => {
  expect(automorphic(76)).toBe('Automorphic')
})

test('Test 8', () => {
  expect(automorphic(95)).toBe('Not!!')
})

test('Test 9', () => {
  expect(automorphic(625)).toBe('Automorphic')
})

test('Test 10', () => {
  expect(automorphic(225)).toBe('Not!!')
})
