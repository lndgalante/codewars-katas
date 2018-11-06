const consonantCount = require('.')

test('Test 1', () => {
  expect(consonantCount('')).toBe(0)
})

test('Test 2', () => {
  expect(consonantCount('aaaaa')).toBe(0)
})

test('Test 3', () => {
  expect(consonantCount('XaeiouX')).toBe(2)
})

test('Test 4', () => {
  expect(consonantCount('Bbbbb')).toBe(5)
})

test('Test 5', () => {
  expect(consonantCount('helLo world')).toBe(7)
})

test('Test 6', () => {
  expect(consonantCount('h^$&^#$&^elLo world')).toBe(7)
})

test('Test 7', () => {
  expect(consonantCount('0123456789')).toBe(0)
})

test('Test 8', () => {
  expect(consonantCount('012345_Cb')).toBe(2)
})
