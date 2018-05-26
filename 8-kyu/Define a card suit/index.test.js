const defineSuit = require('.')

test('Test 1', () => {
  expect(defineSuit('3♣')).toBe('clubs')
})

test('Test 2', () => {
  expect(defineSuit('Q♠')).toBe('spades')
})

test('Test 3', () => {
  expect(defineSuit('9♦')).toBe('diamonds')
})

test('Test 4', () => {
  expect(defineSuit('J♥')).toBe('hearts')
})
