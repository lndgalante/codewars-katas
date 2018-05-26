const century = require('.')

test('Test 1', () => {
  expect(century(1705)).toBe(18)
})

test('Test 2', () => {
  expect(century(1900)).toBe(19)
})

test('Test 3', () => {
  expect(century(1601)).toBe(17)
})

test('Test 4', () => {
  expect(century(2000)).toBe(20)
})

test('Test 5', () => {
  expect(century(89)).toBe(1)
})
