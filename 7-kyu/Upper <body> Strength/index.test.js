const alexMistakes = require('.')

test('Test 1', () => {
  expect(alexMistakes(10, 120)).toBe(3)
})

test('Test 2', () => {
  expect(alexMistakes(11, 120)).toBe(3)
})

test('Test 3', () => {
  expect(alexMistakes(3, 45)).toBe(2)
})

test('Test 4', () => {
  expect(alexMistakes(8, 120)).toBe(3)
})

test('Test 5', () => {
  expect(alexMistakes(6, 60)).toBe(2)
})
