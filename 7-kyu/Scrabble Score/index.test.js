const scrabbleScore = require('.')

test('Test 1', () => {
  expect(scrabbleScore('')).toBe(0)
})

test('Test 2', () => {
  expect(scrabbleScore('a')).toBe(1)
})

test('Test 3', () => {
  expect(scrabbleScore('street')).toBe(6)
})

test('Test 4', () => {
  expect(scrabbleScore(' a')).toBe(1)
})

test('Test 5', () => {
  expect(scrabbleScore('st re et')).toBe(6)
})
