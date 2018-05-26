const spam = require('.')

test('Test 1', () => {
  expect(spam(1)).toBe('hue')
})

test('Test 2', () => {
  expect(spam(6)).toBe('huehuehuehuehuehue')
})

test('Test 3', () => {
  expect(spam(14)).toBe('huehuehuehuehuehuehuehuehuehuehuehuehuehue')
})
