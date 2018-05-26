const datingRange = require('.')

test('Test 1', () => {
  expect(datingRange(17)).toBe('15-20')
})

test('Test 2', () => {
  expect(datingRange(40)).toBe('27-66')
})

test('Test 3', () => {
  expect(datingRange(15)).toBe('14-16')
})

test('Test 4', () => {
  expect(datingRange(35)).toBe('24-56')
})

test('Test 5', () => {
  expect(datingRange(10)).toBe('9-11')
})
