const duplicateCount = require('./index.js')

test('Test 1', () => {
  expect(duplicateCount('abcde')).toBe(0)
})

test('Test 2', () => {
  expect(duplicateCount('aabbcde')).toBe(2)
})

test('Test 3', () => {
  expect(duplicateCount('aabBcde')).toBe(2)
})

test('Test 4', () => {
  expect(duplicateCount('indivisibility')).toBe(1)
})

test('Test 5', () => {
  expect(duplicateCount('Indivisibilities')).toBe(2)
})

test('Test 6', () => {
  expect(duplicateCount('aA11')).toBe(2)
})

test('Test 7', () => {
  expect(duplicateCount('ABBA')).toBe(2)
})
